var data = require('./data');
var hanzi = require('./hanzidecomposer');
var pinyin = require('./pinyin.js');
var dictionarysimplified = {};
var dictionarytraditional = {};
var hanzi = require('./hanzidecomposer.js');
var phonetic_set_one = {};
var phonetic_set_two = {};

var Segmenter = require('./segmenter.js').LongestMatchSegmenter;
var segmenter = new Segmenter(definitionLookup);

function start() {
  console.log('Hanzi is compiling dictionary...');

  //Reading in CCEDICT
  var readFile = data.loadCCEDICT();
  var lines = readFile.split(/\r?\n/);
  loadIrregularPhonetics();
  loadJundaPinyin();
  loadFrequencyData();
  phonetic_set_one = require('./data/phonetic_sets_regularity_one.js')
    .regularity_one;
  phonetic_set_two = require('./data/phonetic_sets_regularity_two.js')
    .regularity_two;

  var STARTING_LINE = 30;
  for (var i = STARTING_LINE; i < lines.length; i++) {
    var multiplearray = [getElements(i)];
    while (
      multiplearray[0].traditional == nextCharTraditional(i + 1) &&
      multiplearray[0].simplified == nextCharSimplified(i + 1)
    ) {
      multiplearray.push(getElements(i + 1));
      i++;
    }

    if (
      typeof dictionarysimplified[multiplearray[0].simplified] != 'undefined'
    ) {
      var newMultipleArray = dictionarysimplified[multiplearray[0].simplified];
      for (var j = 0; j < multiplearray.length; j++) {
        newMultipleArray.push(multiplearray[j]);
      }

      dictionarysimplified[multiplearray[0].simplified] = newMultipleArray;
    } else {
      dictionarysimplified[multiplearray[0].simplified] = multiplearray;
    }

    if (
      typeof dictionarytraditional[multiplearray[0].traditional] != 'undefined'
    ) {
      var newMultipleArray =
        dictionarytraditional[multiplearray[0].traditional];
      for (var j = 0; j < multiplearray.length; j++) {
        newMultipleArray.push(multiplearray[j]);
      }

      dictionarytraditional[multiplearray[0].traditional] = newMultipleArray;
    } else {
      dictionarytraditional[multiplearray[0].traditional] = multiplearray;
    }

    // dictionarysimplified[multiplearray[0].simplified] = multiplearray;
    // dictionarytraditional[multiplearray[0].traditional] = multiplearray;
  }

  function nextCharTraditional(j) {
    if (j < lines.length) {
      var nextcharacter = lines[j].split(' ');
      var nextcheck = nextcharacter[0];
      return nextcheck;
    }
    return '';
  }

  function nextCharSimplified(j) {
    if (j < lines.length) {
      var nextcharacter = lines[j].split(' ');
      var nextcheck = nextcharacter[1];
      return nextcheck;
    }
    return '';
  }

  function getElements(i) {
    var openbracket = lines[i].indexOf('[');
    var closebracket = lines[i].indexOf(']');
    var defStart = lines[i].indexOf('/');
    var defClose = lines[i].lastIndexOf('/');
    var pinyin = lines[i].substring(openbracket + 1, closebracket);
    var definition = lines[i].substring(defStart + 1, defClose);
    var elements = lines[i].split(' ');
    var traditional = elements[0];
    var simplified = elements[1];
    return {
      traditional: traditional,
      simplified: simplified,
      pinyin: pinyin,
      definition: definition
    };
  }
}

function definitionLookup(word, scripttype) {
  if (scripttype == null) {
    if (determineIfSimplified(word)) {
      return dictionarysimplified[word];
    }
    if (!determineIfSimplified(word)) {
      return dictionarytraditional[word];
    }
  } else {
    if (scripttype == 's') {
      return dictionarysimplified[word];
    } else {
      return dictionarytraditional[word];
    }
  }
}

function dictionarySearch(character, type) {
  /*--- Types: Only = Just the characters and no alternatives. If not then finds all cases of that character ---*/
  var search = [];
  var regexstring = '^(';

  if (type == 'only') {
    for (var i = 0; i < character.length; i++) {
      if (i < character.length - 1) {
        regexstring = regexstring + character.substring(i, i + 1) + '|';
      } else {
        regexstring = regexstring + character.substring(i, i + 1) + ')+$';
      }
    }
  } else {
    regexstring = '[' + character + ']';
  }

  var re = new RegExp(regexstring, 'g');

  // Both indexes are always scanned: a dual-script character such as 於 or 乾
  // matches headwords in each, so the traditional side cannot be treated as a
  // fallback. Words written identically in both scripts live in both indexes,
  // hence entries already collected once are skipped.
  var seen = {};
  scanIndex(dictionarysimplified);
  scanIndex(dictionarytraditional);

  function scanIndex(dictionary) {
    for (var word in dictionary) {
      if (dictionary.hasOwnProperty(word)) {
        if (word.search(re) != -1) {
          var entries = [];
          for (var i = 0; i < dictionary[word].length; i++) {
            var entry = dictionary[word][i];
            var key =
              entry.traditional +
              '\u0001' +
              entry.simplified +
              '\u0001' +
              entry.pinyin +
              '\u0001' +
              entry.definition;
            if (!seen.hasOwnProperty(key)) {
              seen[key] = true;
              entries.push(entry);
            }
          }
          if (entries.length > 0) {
            search.push(entries);
          }
        }
      }
    }
  }

  return search;
}

function getExamples(character) {
  /*--- Does a dictionary search and finds the most useful example words ---*/

  var isSimplified = determineIfSimplified(character);

  var potentialexamples = dictionarySearch(character);
  var allfreq = [];
  var lowfreq = [];
  var midfreq = [];
  var highfreq = [];
  var i = 0;
  for (; i < potentialexamples.length; i++) {
    //Create Array of Frequency Points to calculate distributions
    //It takes the frequency accounts of both scripts into account.

    var wordsimp = potentialexamples[i][0].simplified;
    var wordtrad = potentialexamples[i][0].traditional;

    var totalfrequency = 0;
    if ('undefined' != typeof wordfreq[wordsimp]) {
      totalfrequency = totalfrequency + parseInt(wordfreq[wordsimp]);
    }
    if ('undefined' != typeof wordfreq[wordtrad]) {
      totalfrequency = totalfrequency + parseInt(wordfreq[wordtrad]);
    }
    allfreq.push(totalfrequency);
  }

  //Calculate mean, variance + sd
  allfreq.sort(function(a, b) {
    return a - b;
  });
  var mean = calculateMean();
  var variance = calculateVariance(mean);
  var sd = Math.sqrt(variance);

  determineFreqCategories();

  //Create frequency categories
  function determineFreqCategories() {
    if (mean - sd < 0) {
      var lowrange = 0 + mean / 3;
    } else {
      var lowrange = mean - sd;
    }
    var midrange = [mean + sd, lowrange];
    var highrange = mean + sd;

    var i = 0;
    for (; i < potentialexamples.length; i++) {
      var word = potentialexamples[i][0];

      if ('undefined' != typeof wordfreq[word.simplified]) {
        pushFrequency(word);
      }
    }

    function pushFrequency(word) {
      if (wordfreq[word.simplified] < lowrange) {
        lowfreq.push(word);
      }
      if (
        wordfreq[word.simplified] >= midrange[1] &&
        wordfreq[word.simplified] < midrange[0]
      ) {
        midfreq.push(word);
      }
      if (wordfreq[word.simplified] >= highrange) {
        highfreq.push(word);
      }
    }
  }
  var examplewords = [highfreq, midfreq, lowfreq];
  return examplewords;

  function calculateMean() {
    var total = 0;
    var i = 0;
    for (; i < allfreq.length; i++) {
      total = total + parseInt(allfreq[i], 10);
    }
    var mean = total / allfreq.length;
    return mean;
  }

  function calculateVariance() {
    var total = 0;
    var i = 0;
    for (; i < allfreq.length; i++) {
      var localvar = parseInt(allfreq[i], 10) - mean;
      total = total + localvar * localvar;
    }
    var variance = total / allfreq.length;
    return variance;
  }
}

function determineIfSimplified(character) {
  if ('undefined' != typeof dictionarysimplified[character]) {
    return true;
  }
  if ('undefined' != typeof dictionarytraditional[character]) {
    return false;
  }
}

var charfreq = {};
var characterFrequencyCountIndex = [];
var wordfreq = {};
function loadFrequencyData() {
  console.log('Starting to read frequency data');

  var readFile = data.loadLeiden();
  var lines = readFile.split(/\r?\n/);

  var i = 0;
  for (; i < lines.length; i++) {
    var splits = lines[i].split(',');
    var word = splits[0];
    var freq = splits[1];
    wordfreq[word] = freq;
  }

  var readFile = data.loadFrequencyWithScriptVariantsRemoved();
  lines = readFile.split(/\r?\n/);
  var i = 0;
  for (; i < lines.length; i++) {
    var splits = lines[i].split('\t');
    var number = splits[0];
    var character = splits[1];

    charfreq[character] = {
      number: number,
      character: character,
      count: splits[2],
      percentage: splits[3],
      pinyin: splits[4],
      meaning: splits[5]
    };

    characterFrequencyCountIndex[number] = character;
  }
  console.log('Frequency data loaded');
}

var irregularphonetics = {};
function loadIrregularPhonetics() {
  var readFile = data.loadIrregularPhonetics();
  var lines = readFile.split(/\r?\n/);
  for (var i = 0; i < lines.length; i++) {
    var splits = lines[i].split(':');
    var character = splits[0];
    var pinyin = splits[1];
    // 127 rows carry the literal placeholder "fill" instead of a reading -- the
    // upstream list uses it to mean "this shape has no reading recorded here".
    // Storing it would make getPinyin return ["fill"], which is a *hit*: it
    // stops the Junda fallback below from ever being consulted, and any
    // regularity scored against it is 0. 涫 is in Junda as guan4 but was marked
    // "fill", so 官 (guan1) read as no clue at all. Skip the placeholder and let
    // the fallbacks run.
    if (!pinyin || pinyin == 'fill') {
      continue;
    }
    irregularphonetics[character] = pinyin;
  }
}

// Junda's character frequency list carries a reading for every character in
// it, including ~1000 (mostly traditional/rare) characters that never make it
// into the script-variants-removed frequency list. Readings are tone-numbered
// and slash-separated for multiple pronunciations, e.g. 的 -> "de/di2/di4".
var jundapinyin = {};
function loadJundaPinyin() {
  var readFile = data.loadJunda();
  var lines = readFile.split(/\r?\n/);
  for (var i = 0; i < lines.length; i++) {
    var splits = lines[i].split('\t');
    var character = splits[1];
    var pinyin = splits[4];
    if (!character || !pinyin) {
      continue;
    }
    jundapinyin[character] = pinyin.split('/');
  }
}

function getPinyin(character) {
  //These are for components not found in CC-CEDICT.
  if ('undefined' != typeof dictionarysimplified[character]) {
    var i = 0;
    var pinyinarray = [];
    for (; i < dictionarysimplified[character].length; i++) {
      pinyinarray[i] = dictionarysimplified[character][i].pinyin;
    }
    return pinyinarray;
  }
  if ('undefined' != typeof dictionarytraditional[character]) {
    var i = 0;
    var pinyinarray = [];
    for (; i < dictionarytraditional[character].length; i++) {
      pinyinarray[i] = dictionarytraditional[character][i].pinyin;
    }
    return pinyinarray;
  }
  if ('undefined' != typeof irregularphonetics[character]) {
    return [irregularphonetics[character]];
  }
  if ('undefined' != typeof jundapinyin[character]) {
    return jundapinyin[character].slice();
  }
  if (
    character.search(
      /[㇐㇇㇚𤴓𠂇㇒㇑⺊阝㇟⺀㇓㇝𪜋⺁𠮛㇔龶㇃丆㇏⺌⺹⺆㇛㇠㇆⺧⺮龸⺈㇗龴㇕㇈㇖⺤㇎⺺䧹㇂㇉⺪㇀]/g
    ) != -1
  ) {
    return ['_stroke'];
  }
  if (isNaN(character) == false) {
    return ['_number'];
  }
  return null;
}

// Every distinct component in the primitive decomposition tree — internal
// grouping nodes AND leaves — in pre-order, excluding the character itself and
// the glyph-less "No glyph available" gaps (which have no reading). This lets
// phonetic detection see an intermediate node that carries the sound (相 in 想,
// 果 in 裹, 氐 in 低) rather than only the outermost or radical-level split.
function collectTreeComponents(character) {
  var tree = hanzi.getDecompositionTree(character, 'primitive');
  var out = [];
  if (!tree || typeof tree != 'object' || !Array.isArray(tree.children)) {
    return out;
  }
  var seen = {};
  (function walk(node, isRoot) {
    if (
      !isRoot &&
      node.character != 'No glyph available' &&
      !seen[node.character]
    ) {
      seen[node.character] = true;
      out.push(node.character);
    }
    for (var i = 0; i < node.children.length; i++) {
      walk(node.children[i], false);
    }
  })(tree, true);
  return out;
}

function determinePhoneticRegularity(decomposition) {
  var regularityarray = {};
  // Accept either a character or a decomposition object from hanzi.decompose().
  var character =
    decomposition != null && 'undefined' != typeof decomposition.character
      ? decomposition.character
      : decomposition;

  //Get all possible pronunciations for character
  var charpinyin = getPinyin(character);
  if (charpinyin == null) {
    return (regularityarray = null);
  }

  //Determine phonetic regularity against every component in the primitive tree
  var components = collectTreeComponents(character);
  for (var k = 0; k < components.length; k++) {
    var component = components[k];
    var phoneticpinyin = getPinyin(component); //Get the pinyin of the component

    var i = 0;
    for (; i < charpinyin.length; i++) {
      //Compare it with all the possible pronunciations of the character
      //Init Object
      if ('undefined' == typeof regularityarray[charpinyin[i]]) {
        //If the object store has no character pinyin stored yet, create the point
        regularityarray[charpinyin[i]] = {
          character: character,
          component: [],
          phoneticpinyin: [],
          regularity: []
        };
      }

      if (phoneticpinyin == null) {
        //If the component has no pronunciation found, nullify the regularity computation
        regularityarray[charpinyin[i]].phoneticpinyin.push(null);
        regularityarray[charpinyin[i]].component.push(component);
        regularityarray[charpinyin[i]].regularity.push(null);
      } else {
        //Compare the character pinyin to all possible phonetic pinyin pronunciations
        var j = 0;
        for (; j < phoneticpinyin.length; j++) {
          regularityarray[charpinyin[i]].phoneticpinyin.push(phoneticpinyin[j]);
          regularityarray[charpinyin[i]].component.push(component);
          regularityarray[charpinyin[i]].regularity.push(
            getRegularityScale(charpinyin[i], phoneticpinyin[j])
          );
        }
      }
    }
  }
  return regularityarray;
}

function getCharacterFrequency(character) {
  if ('undefined' != typeof charfreq[character]) {
    return charfreq[character];
  }

  // Not ranked under its own form, so map it through CC-CEDICT to a ranked
  // simplified form. Both indexes must be consulted: a dual-script character
  // like 於 is its own simplified headword (the unranked wu1 sense) and only
  // reaches its ranked form (于) through the traditional index. Of all ranked
  // mappings, return the most frequent one.
  var entries = [];
  if ('undefined' != typeof dictionarysimplified[character]) {
    entries = entries.concat(dictionarysimplified[character]);
  }
  if ('undefined' != typeof dictionarytraditional[character]) {
    entries = entries.concat(dictionarytraditional[character]);
  }

  var best = null;
  for (var i = 0; i < entries.length; i++) {
    var frequency = charfreq[entries[i].simplified];
    if (
      'undefined' != typeof frequency &&
      (best == null ||
        parseInt(frequency.number, 10) < parseInt(best.number, 10))
    ) {
      best = frequency;
    }
  }

  if (best != null) {
    return best;
  }

  return 'Character not found';
}

function getCharacterInFrequencyListByPosition(position) {
  return getCharacterFrequency(characterFrequencyCountIndex[position]);
}

//Helper Functions
function getRegularityScale(charpinyin, phoneticpinyin) {
  if (charpinyin == null || phoneticpinyin == null) {
    return null;
  }

  // Regularity Scale: 1 = Exact Match (with tone), 2 = Syllable Match (without tone)
  // 3 = Similar in Initial, 4 = Similar in Final, 5 = Similar in Rhyme (finals that
  // differ only in their medial, e.g. 然 ran / 犬 quan), 6 = Similar in Initial and
  // rhyming (a 4 or a 5 whose initials are different but share a place of
  // articulation, e.g. 现 xian / 见 jian), 0 = No regularity
  var character = pinyin.parse(charpinyin);
  var phonetic = pinyin.parse(phoneticpinyin);

  // Syllables the analyser cannot read — stroke names, "_number", CC-CEDICT's
  // "xx" placeholder — can still be compared as plain strings for an exact match.
  if (character == null || phonetic == null) {
    var rawchar = String(charpinyin).toLowerCase();
    var rawphonetic = String(phoneticpinyin).toLowerCase();
    return rawchar === rawphonetic ? 1 : 0;
  }

  //First test for Scale 1 & 2
  if (character.syllable === phonetic.syllable) {
    return character.tone === phonetic.tone ? 1 : 2;
  }

  // The final is the strongest remaining signal, then the rhyme it contains,
  // then the initial. A shared empty initial is not evidence of anything, so
  // 有 you / 月 yue do not count as similar in initial.
  var samefinal =
    character.final === phonetic.final &&
    character.emptyRhyme === phonetic.emptyRhyme;
  var samerhyme =
    character.rhyme === phonetic.rhyme &&
    character.emptyRhyme === phonetic.emptyRhyme;

  // A matching final on its own can be coincidence; a matching final under a
  // near-miss initial rarely is, so that pairing outranks both. Identical
  // initials are not a near miss and do not qualify: 浪 lang / 良 liang stays 5.
  if (
    (samefinal || samerhyme) &&
    pinyin.relatedInitials(character.initial, phonetic.initial)
  ) {
    return 6;
  }
  if (samefinal) {
    return 4;
  }
  if (samerhyme) {
    return 5;
  }
  if (character.initial !== '' && character.initial === phonetic.initial) {
    return 3;
  }

  return 0;
}

function getPhoneticSet(regularity_scale) {
  switch (regularity_scale) {
    case 1:
      return phonetic_set_one;
      break;
    case 2:
      return phonetic_set_two;
      break;
    default:
  }
}

exports.start = start;
exports.definitionLookup = definitionLookup;
exports.dictionarySearch = dictionarySearch;
exports.getExamples = getExamples;
exports.getPinyin = getPinyin;
exports.parsePinyin = pinyin.parse;
exports.getCharacterFrequency = getCharacterFrequency;
exports.determinePhoneticRegularity = determinePhoneticRegularity;
exports.getPhoneticSet = getPhoneticSet;
exports.getCharacterInFrequencyListByPosition = getCharacterInFrequencyListByPosition;
exports.segment = segmenter.segment.bind(segmenter);
