const assert = require('assert');
const hanzi = require('../index.js');

hanzi.start();

// Every distinct toneless syllable that appears in this library's copy of
// CC-CEDICT. If the parser can read all of these, it can read the dictionary.
// The syllabic nasals and CC-CEDICT's "xx" placeholder are not syllables and
// are expected to be unreadable, so they are held out.
const NOT_SYLLABLES = ['m', 'n', 'ng', 'r', 'hm', 'hng', 'xx'];
const CORPUS = (function() {
  const entry = /^(\S+)\s(\S+)\s\[([^\]]*)\]/;
  const syllables = {};
  require('../lib/data/cedict_ts.u8.js')
    .split('\n')
    .forEach(function(line) {
      const matched = line.match(entry);
      if (!matched) return;
      const characters = matched[1].split('');
      const readings = matched[3].split(' ');
      if (characters.length !== readings.length) return; // multi-syllable entry
      readings.forEach(function(reading) {
        const toned = reading.toLowerCase().match(/^([a-z:]+)([1-5])$/);
        if (toned && NOT_SYLLABLES.indexOf(toned[1]) === -1) {
          syllables[toned[1]] = true;
        }
      });
    });
  return Object.keys(syllables);
})();

function split(pinyin) {
  const parsed = hanzi.parsePinyin(pinyin);
  return parsed && [parsed.initial, parsed.final];
}

describe('parsePinyin', function() {
  it('splits a plain syllable into initial and final', function() {
    assert.deepEqual(split('ni3'), ['n', 'i']);
    assert.deepEqual(split('zhong1'), ['zh', 'ong']);
    assert.deepEqual(split('mao1'), ['m', 'ao']);
  });

  it('gives zero-initial syllables an empty initial', function() {
    // The old splitter read these as a/e/o plus whatever followed.
    assert.deepEqual(split('an1'), ['', 'an']);
    assert.deepEqual(split('er2'), ['', 'er']);
    assert.deepEqual(split('ou1'), ['', 'ou']);
    assert.deepEqual(split('ei1'), ['', 'ei']);
    assert.deepEqual(split('ang1'), ['', 'ang']);
  });

  it('does not treat y and w as initials', function() {
    assert.deepEqual(split('yi1'), ['', 'i']);
    assert.deepEqual(split('yan1'), ['', 'ian']);
    assert.deepEqual(split('ying1'), ['', 'ing']);
    assert.deepEqual(split('wu1'), ['', 'u']);
    assert.deepEqual(split('wa1'), ['', 'ua']);
    assert.deepEqual(split('wang1'), ['', 'uang']);
    assert.deepEqual(split('weng1'), ['', 'ueng']);
  });

  it('restores the abbreviated finals iou, uei and uen', function() {
    // 有 you and 牛 niu share a final; the spelling hides it.
    assert.deepEqual(split('you3'), ['', 'iou']);
    assert.deepEqual(split('niu2'), ['n', 'iou']);
    assert.deepEqual(split('wei1'), ['', 'uei']);
    assert.deepEqual(split('gui1'), ['g', 'uei']);
    assert.deepEqual(split('dui4'), ['d', 'uei']);
    assert.deepEqual(split('wen1'), ['', 'uen']);
    assert.deepEqual(split('gun3'), ['g', 'uen']);
    assert.deepEqual(split('lun4'), ['l', 'uen']);
  });

  it('restores ü after j, q, x and y', function() {
    assert.deepEqual(split('ju1'), ['j', 'ü']);
    assert.deepEqual(split('qu4'), ['q', 'ü']);
    assert.deepEqual(split('xue2'), ['x', 'üe']);
    assert.deepEqual(split('jun1'), ['j', 'ün']);
    assert.deepEqual(split('yu2'), ['', 'ü']);
    assert.deepEqual(split('yue1'), ['', 'üe']);
    assert.deepEqual(split('yuan1'), ['', 'üan']);
    assert.deepEqual(split('yun1'), ['', 'ün']);
    assert.deepEqual(split('yong4'), ['', 'iong']);
  });

  it('keeps ü distinct from u', function() {
    assert.notDeepEqual(split('qu4'), split('tu3'));
    assert.deepEqual(split('lu:4'), ['l', 'ü']); // CC-CEDICT spelling
    assert.deepEqual(split('lv4'), ['l', 'ü']);
    assert.deepEqual(split('nu:e4'), ['n', 'üe']);
    assert.deepEqual(split('lu4'), ['l', 'u']);
  });

  it('reads the tone and accepts toneless and capitalised input', function() {
    assert.equal(hanzi.parsePinyin('ma1').tone, 1);
    assert.equal(hanzi.parsePinyin('ma5').tone, 5);
    assert.equal(hanzi.parsePinyin('ma').tone, null);
    assert.equal(hanzi.parsePinyin('Yang2').syllable, 'yang');
    assert.deepEqual(split('Niu2'), ['n', 'iou']);
  });

  it('separates the medial from the rest of the final', function() {
    const jiu = hanzi.parsePinyin('jiu4');
    assert.equal(jiu.medial, 'i');
    assert.equal(jiu.rhyme, 'ou');
    // 然 ran and its phonetic 犬 quan differ only in the medial
    assert.equal(hanzi.parsePinyin('ran2').rhyme, 'an');
    assert.equal(hanzi.parsePinyin('quan3').rhyme, 'an');
    // in, ing and ün are nuclei, not medial + rhyme
    assert.equal(hanzi.parsePinyin('xin1').medial, '');
    assert.equal(hanzi.parsePinyin('xing1').medial, '');
    assert.equal(hanzi.parsePinyin('jun1').medial, '');
    // so 心 xin does not share a rhyme with 西 xi
    assert.notEqual(
      hanzi.parsePinyin('xin1').rhyme,
      hanzi.parsePinyin('xi1').rhyme
    );
  });

  it('flags the empty rhyme', function() {
    // The scheme spells both "i", but 诗 shi does not rhyme with 西 xi.
    assert.equal(hanzi.parsePinyin('shi1').emptyRhyme, true);
    assert.equal(hanzi.parsePinyin('zi1').emptyRhyme, true);
    assert.equal(hanzi.parsePinyin('ri4').emptyRhyme, true);
    assert.equal(hanzi.parsePinyin('xi1').emptyRhyme, false);
    assert.equal(hanzi.parsePinyin('yi1').emptyRhyme, false);
  });

  it('returns null for anything that is not a Mandarin syllable', function() {
    assert.equal(hanzi.parsePinyin('_stroke'), null);
    assert.equal(hanzi.parsePinyin('_number'), null);
    assert.equal(hanzi.parsePinyin('xx5'), null); // CC-CEDICT placeholder
    assert.equal(hanzi.parsePinyin('m2'), null); // syllabic nasal 呒
    assert.equal(hanzi.parsePinyin('r5'), null); // erhua
    assert.equal(hanzi.parsePinyin('B'), null); // from entries like B超
    assert.equal(hanzi.parsePinyin(''), null);
    assert.equal(hanzi.parsePinyin(null), null);
  });

  it('reads every syllable in the dictionary', function() {
    assert(CORPUS.length > 400, 'expected the whole syllable inventory');
    const unreadable = CORPUS.filter(function(syllable) {
      return hanzi.parsePinyin(syllable) === null;
    });
    assert.deepEqual(unreadable, []);
  });
});

describe('phonetic regularity scale', function() {
  function scale(character, reading, component) {
    const entry = hanzi.determinePhoneticRegularity(character)[reading];
    return entry.regularity[entry.phoneticpinyin.indexOf(component)];
  }

  it('rhymes across the spelling of a shared final', function() {
    // 就 jiu4 and its phonetic 尤 you2 are both -iou
    assert.equal(scale('就', 'jiu4', 'you2'), 4);
    // 回 hui2 and 囗 wei2 are both -uei
    assert.equal(scale('回', 'hui2', 'wei2'), 4);
  });

  it('no longer rhymes syllables that only look alike', function() {
    // qu is q + ü, tu is t + u
    assert.equal(scale('去', 'qu4', 'tu3'), 0);
    // 意 yi4 is the plain -i, 日 ri4 the empty rhyme
    assert.equal(scale('意', 'yi4', 'ri4'), 0);
  });

  it('does not count a shared empty initial as alliteration', function() {
    // both were read as "initial y" before
    assert.equal(scale('有', 'you3', 'yue4'), 0);
  });

  it('scores finals that differ only in their medial as 5', function() {
    assert.equal(scale('然', 'ran2', 'quan3'), 5); // an / üan
    assert.equal(scale('同', 'tong2', 'jiong1'), 5); // ong / iong
    assert.equal(scale('问', 'wen4', 'men2'), 5); // uen / en
  });
});
