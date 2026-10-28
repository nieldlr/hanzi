// Builds lib/data/charfreq.txt.js, the simplified character frequency list used
// by getCharacterFrequency and getCharacterInFrequencyListByPosition.
//
// Sources:
//   Jun Da's Modern Chinese character frequency list, lib/data/frequencyjunda.txt.js
//   通用规范汉字表 (PRC 2013, 8105 characters), lib/data/tongyong-guifan-2013.txt
//   SUBTLEX-CH (film & TV subtitles, Cai & Brysbaert 2010), lib/data/SUBTLEX-CH-CHR
//   Leiden Weibo Corpus (Sina Weibo, 2012), lib/data/leidenfreqdata.txt.js
//
// Junda's corpus mixes in traditional characters and rare variants, so only
// characters in the official PRC list are kept (plus EXTRA_CHARACTERS). Junda
// ranks most of them. Standard characters Junda lacks are ranked from a blend
// of SUBTLEX-CH and Leiden per-million counts, mixed as in
// build-word-frequency.js, and given an estimated count scaled to Junda's
// corpus size. Those estimates only compare reliably with Junda's counts for
// common characters: in the long tail the two corpora disagree, and SUBTLEX's
// smallest count is ~4x Junda's per million. So level 1 characters (the 3500
// most common) are slotted in among Junda's by estimated count; the rest go
// after Junda's last character, ordered among themselves. Standard characters
// found in none of the corpora are left out.
//
// Junda's pinyin and meaning columns are kept. Characters from the other
// corpora take theirs from CC-CEDICT. The cumulative percentage is recomputed
// over the final list.
//
// Usage: node scripts/build-character-frequency.js

var fs = require('fs');
var path = require('path');

var SUBTLEX_WEIGHT = 0.8;
var LEIDEN_WEIGHT = 0.2;
var LEVEL_ONE_LAST = 3500;

// Kept although the standard list leaves them out. 诶 (ei) is in everyday
// mainland use, especially in chat.
var EXTRA_CHARACTERS = ['诶'];

var DATA_DIR = path.join(__dirname, '..', 'lib', 'data');
var OUTPUT = path.join(DATA_DIR, 'charfreq.txt.js');

function loadStandardList() {
  var lines = fs
    .readFileSync(path.join(DATA_DIR, 'tongyong-guifan-2013.txt'), 'utf8')
    .split(/\r?\n/);
  var standard = {};
  for (var i = 0; i < lines.length; i++) {
    if (lines[i][0] === '#') continue;
    var parts = lines[i].split('\t');
    if (parts.length < 2) continue;
    standard[parts[0]] = parseInt(parts[1], 10);
  }
  return standard;
}

function loadJunda() {
  var lines = require(path.join(DATA_DIR, 'frequencyjunda.txt.js')).split(
    /\r?\n/
  );
  var rows = [];
  var total = 0;
  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split('\t');
    if (parts.length < 3) continue;
    var count = parseInt(parts[2], 10);
    total += count;
    rows.push({
      character: parts[1],
      count: count,
      pinyin: parts[4] || '',
      meaning: parts[5] || ''
    });
  }
  return {rows: rows, total: total};
}

function loadSubtlex() {
  var buffer = fs.readFileSync(path.join(DATA_DIR, 'SUBTLEX-CH-CHR'));
  var lines = new TextDecoder('gb18030').decode(buffer).split(/\r?\n/);
  var counts = {};
  var total = 0;
  // The first three lines are the total character count, context count and
  // header.
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

// Leiden is a word list, so each word's count goes to every character in it.
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
    var characters = Array.from(lines[i].slice(0, comma));
    for (var j = 0; j < characters.length; j++) {
      counts[characters[j]] = (counts[characters[j]] || 0) + count;
      total += count;
    }
  }
  return {counts: counts, total: total};
}

// Pinyin and meaning in Junda's format: readings joined by "/", each reading's
// definitions joined by "/", and readings' definitions separated by ", ".
// CC-CEDICT's neutral tone 5 is dropped, as Junda writes it (ba, de).
function loadCedictReadings() {
  var lines = require(path.join(DATA_DIR, 'cedict_ts.u8.js')).split(/\r?\n/);
  var bySimplified = {};
  var byTraditional = {};
  for (var i = 0; i < lines.length; i++) {
    var match = lines[i].match(/^(\S+) (\S+) \[([^\]]+)\] \/(.*)\/$/);
    if (!match) continue;
    var entry = {
      pinyin: match[3].toLowerCase().replace(/5$/, ''),
      definitions: match[4].split('/')
    };
    (bySimplified[match[2]] = bySimplified[match[2]] || []).push(entry);
    (byTraditional[match[1]] = byTraditional[match[1]] || []).push(entry);
  }
  return function(character) {
    var entries = bySimplified[character] || byTraditional[character] || [];
    var readings = [];
    var definitions = {};
    for (var i = 0; i < entries.length; i++) {
      var reading = entries[i].pinyin;
      if (!definitions[reading]) {
        readings.push(reading);
        definitions[reading] = [];
      }
      definitions[reading] = definitions[reading].concat(
        entries[i].definitions
      );
    }
    return {
      pinyin: readings.join('/'),
      meaning: readings
        .map(function(reading) {
          return definitions[reading].join('/');
        })
        .join(', ')
    };
  };
}

function build() {
  var standard = loadStandardList();
  var junda = loadJunda();
  var subtlex = loadSubtlex();
  var leiden = loadLeiden();
  var cedictReadings = loadCedictReadings();

  var keep = Object.assign({}, standard);
  EXTRA_CHARACTERS.forEach(function(character) {
    keep[character] = Infinity;
  });

  var ranked = junda.rows.filter(function(row) {
    return row.character in keep;
  });

  var inJunda = {};
  junda.rows.forEach(function(row) {
    inJunda[row.character] = true;
  });

  var levelOne = [];
  var tail = [];
  var left = 0;
  Object.keys(standard).forEach(function(character) {
    if (inJunda[character]) return;
    var perMillion =
      SUBTLEX_WEIGHT *
        ((subtlex.counts[character] || 0) / subtlex.total) *
        1e6 +
      LEIDEN_WEIGHT * ((leiden.counts[character] || 0) / leiden.total) * 1e6;
    if (perMillion === 0) {
      left++;
      return;
    }
    var readings = cedictReadings(character);
    var row = {
      character: character,
      // A single occurrence in Leiden alone scales to under one.
      count: Math.max(1, Math.round((perMillion * junda.total) / 1e6)),
      perMillion: perMillion,
      pinyin: readings.pinyin,
      meaning: readings.meaning
    };
    (standard[character] <= LEVEL_ONE_LAST ? levelOne : tail).push(row);
  });

  levelOne.forEach(function(row) {
    var at = 0;
    while (at < ranked.length && ranked[at].count >= row.count) at++;
    ranked.splice(at, 0, row);
  });

  tail.sort(function(a, b) {
    return (
      b.perMillion - a.perMillion ||
      standard[a.character] - standard[b.character]
    );
  });
  ranked = ranked.concat(tail);

  var total = ranked.reduce(function(sum, row) {
    return sum + row.count;
  }, 0);
  var cumulative = 0;
  var lines = ranked.map(function(row, i) {
    cumulative += row.count;
    return [
      i + 1,
      row.character,
      row.count,
      Number(((cumulative / total) * 100).toPrecision(12)),
      row.pinyin,
      row.meaning
    ].join('\t');
  });

  fs.writeFileSync(
    OUTPUT,
    'module.exports = `' + lines.join('\n').replace(/[`\\$]/g, '\\$&') + '`;\n'
  );
  console.log(
    'Wrote ' +
      ranked.length +
      ' characters to ' +
      path.relative(process.cwd(), OUTPUT) +
      ' (' +
      (levelOne.length + tail.length) +
      ' ranked from SUBTLEX-CH and Leiden, ' +
      left +
      ' standard characters with no counts left out)'
  );
}

build();
