// Builds lib/data/wordfreq.txt.js, the blended word frequency list used by
// getExamples.
//
// Sources:
//   SUBTLEX-CH (film & TV subtitles, Cai & Brysbaert 2010), lib/data/SUBTLEX-CH-WF
//   Leiden Weibo Corpus (Sina Weibo, 2012), lib/data/leidenfreqdata.txt.js
//
// The two corpora are different sizes, so each is first normalised to words
// per million. Traditional forms are folded into their simplified form via
// CC-CEDICT, and only CEDICT headwords are kept, which drops the segmentation
// fragments in the Leiden data (新浪微, 户端, ...). The two lists are then
// mixed linearly. A word missing from one corpus (often because that corpus's
// segmenter splits it, e.g. 是的 in Leiden) only loses that corpus's share.
//
// Usage: node scripts/build-word-frequency.js

var fs = require('fs');
var path = require('path');

var SUBTLEX_WEIGHT = 0.8;
var LEIDEN_WEIGHT = 0.2;

var DATA_DIR = path.join(__dirname, '..', 'lib', 'data');
var OUTPUT = path.join(DATA_DIR, 'wordfreq.txt.js');

// Maps each CEDICT form to its simplified headword. A form that is itself a
// simplified headword maps to itself, so it is never folded into another word.
function loadSimplifiedLookup() {
  var lines = require(path.join(DATA_DIR, 'cedict_ts.u8.js')).split(/\r?\n/);
  var simplified = {};
  var traditional = {};
  for (var i = 0; i < lines.length; i++) {
    if (lines[i][0] === '#') continue;
    var parts = lines[i].split(' ');
    if (!parts[1]) continue;
    simplified[parts[1]] = parts[1];
    if (!(parts[0] in traditional)) traditional[parts[0]] = parts[1];
  }
  var lookup = {};
  for (var trad in traditional) lookup[trad] = traditional[trad];
  for (var simp in simplified) lookup[simp] = simp;
  return lookup;
}

// Returns {perMillion: {word: number}} keyed by simplified CEDICT headword.
// The total token count includes words that get filtered out, so per-million
// values stay true to the original corpus.
function normalise(counts, total, toSimplified) {
  var perMillion = {};
  for (var word in counts) {
    var simplified = toSimplified[word];
    if (typeof simplified === 'undefined') continue;
    perMillion[simplified] =
      (perMillion[simplified] || 0) + (counts[word] / total) * 1e6;
  }
  return perMillion;
}

function loadSubtlex() {
  var buffer = fs.readFileSync(path.join(DATA_DIR, 'SUBTLEX-CH-WF'));
  var lines = new TextDecoder('gb18030').decode(buffer).split(/\r?\n/);
  var counts = {};
  var total = 0;
  // The first three lines are the total word count, context count and header.
  for (var i = 3; i < lines.length; i++) {
    var parts = lines[i].split('\t');
    if (parts.length < 2) continue;
    var count = parseInt(parts[1], 10);
    if (isNaN(count)) continue;
    counts[parts[0]] = (counts[parts[0]] || 0) + count;
    total += count;
  }
  return {counts: counts, total: total};
}

function loadLeiden() {
  var lines = require(path.join(DATA_DIR, 'leidenfreqdata.txt.js')).split(
    /\r?\n/
  );
  var counts = {};
  var total = 0;
  for (var i = 0; i < lines.length; i++) {
    // Some entries contain commas, so split on the last one.
    var comma = lines[i].lastIndexOf(',');
    if (comma < 1) continue;
    var count = parseInt(lines[i].slice(comma + 1), 10);
    if (isNaN(count)) continue;
    var word = lines[i].slice(0, comma);
    counts[word] = (counts[word] || 0) + count;
    total += count;
  }
  return {counts: counts, total: total};
}

function build() {
  var toSimplified = loadSimplifiedLookup();
  var subtlex = loadSubtlex();
  var leiden = loadLeiden();
  var subtlexPerMillion = normalise(
    subtlex.counts,
    subtlex.total,
    toSimplified
  );
  var leidenPerMillion = normalise(leiden.counts, leiden.total, toSimplified);

  var blended = {};
  var word;
  for (word in subtlexPerMillion) {
    blended[word] = SUBTLEX_WEIGHT * subtlexPerMillion[word];
  }
  for (word in leidenPerMillion) {
    blended[word] =
      (blended[word] || 0) + LEIDEN_WEIGHT * leidenPerMillion[word];
  }

  var words = Object.keys(blended).sort(function(a, b) {
    return blended[b] - blended[a];
  });
  var lines = words.map(function(w) {
    return w + '\t' + Number(blended[w].toPrecision(4));
  });

  fs.writeFileSync(
    OUTPUT,
    'module.exports = `' + lines.join('\n').replace(/[`\\$]/g, '\\$&') + '`;\n'
  );
  console.log(
    'Wrote ' +
      words.length +
      ' words to ' +
      path.relative(process.cwd(), OUTPUT)
  );
}

build();
