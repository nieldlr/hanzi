// Phonological analysis of a single pinyin syllable.
//
// Pinyin orthography is not a phonemic transcription: the same underlying final
// is spelled differently depending on whether a syllable has an initial. 有
// (you) and 牛 (niu) both carry the final -iou, but the standard writes the
// zero-initial form as "you" and abbreviates the post-initial form to "iu". A
// naive prefix/suffix split therefore reports "ou" vs "iu" and misses the rhyme.
//
// This module undoes those spelling conventions and returns the underlying
// initial + final, following 《汉语拼音方案》. The conversion rules are a port of
// pypinyin's strict mode (pypinyin/standard.py, MIT).

// 声母表. Longest-first so "zh"/"ch"/"sh" win over "z"/"c"/"s". y and w are
// deliberately absent: the scheme treats them as spellings of the medials
// i/u/ü, not as initials.
var INITIALS = [
  'zh',
  'ch',
  'sh',
  'b',
  'p',
  'm',
  'f',
  'd',
  't',
  'n',
  'l',
  'g',
  'k',
  'h',
  'j',
  'q',
  'x',
  'r',
  'z',
  'c',
  's'
];

// y and w readmitted as initials, used only as a fallback for syllables that
// fail to analyse otherwise (e.g. the interjection "yo").
var INITIALS_LOOSE = INITIALS.concat(['y', 'w']);

// 声母 grouped by place of articulation. Within a group the initials differ only
// in aspiration (b/p, d/t, g/k, z/c, zh/ch) or in stop-vs-fricative manner
// (z/s, zh/sh, j/q/x), so they are near-homophonous to a listener and phonetic
// series pair them freely: 编 bian / 篇 pian, 渣 zha / 查 cha / 沙 sha.
//
// m, f, n, l, h and r are deliberately ungrouped — each is the only Mandarin
// initial at its place and manner, so there is nothing for it to be confused
// with.
var INITIAL_GROUPS = [
  ['b', 'p'],
  ['d', 't'],
  ['g', 'k'],
  ['j', 'q', 'x'],
  ['z', 'c', 's'],
  ['zh', 'ch', 'sh']
];

var GROUP_OF_INITIAL = (function() {
  var index = {};
  for (var i = 0; i < INITIAL_GROUPS.length; i++) {
    for (var j = 0; j < INITIAL_GROUPS[i].length; j++) {
      index[INITIAL_GROUPS[i][j]] = i;
    }
  }
  return index;
})();

// Whether two initials are distinct but close enough to be heard as a pair.
// Deliberately false for an initial against itself: that is not a near miss to
// be recognised, it is a plain match, and the caller already has it. The empty
// initial is never related to anything — 有 you and 月 yue share no consonant,
// they merely both lack one.
function relatedInitials(a, b) {
  if (!a || !b || a === b) {
    return false;
  }
  return (
    GROUP_OF_INITIAL[a] !== undefined &&
    GROUP_OF_INITIAL[a] === GROUP_OF_INITIAL[b]
  );
}

// 韵母表, mapped to 韵头 (medial) + the 韵腹/韵尾 remainder. The split is listed
// explicitly rather than derived: in "ian" the i is a medial, but in "in" and
// "ing" the i is the nucleus, and no prefix rule distinguishes the two.
var FINALS = {
  i: ['', 'i'],
  u: ['', 'u'],
  ü: ['', 'ü'],
  a: ['', 'a'],
  ia: ['i', 'a'],
  ua: ['u', 'a'],
  o: ['', 'o'],
  uo: ['u', 'o'],
  e: ['', 'e'],
  ie: ['i', 'e'],
  üe: ['ü', 'e'],
  ai: ['', 'ai'],
  uai: ['u', 'ai'],
  ei: ['', 'ei'],
  uei: ['u', 'ei'],
  ao: ['', 'ao'],
  iao: ['i', 'ao'],
  ou: ['', 'ou'],
  iou: ['i', 'ou'],
  an: ['', 'an'],
  ian: ['i', 'an'],
  uan: ['u', 'an'],
  üan: ['ü', 'an'],
  en: ['', 'en'],
  uen: ['u', 'en'],
  in: ['', 'in'],
  ün: ['', 'ün'],
  ang: ['', 'ang'],
  iang: ['i', 'ang'],
  uang: ['u', 'ang'],
  eng: ['', 'eng'],
  ueng: ['u', 'eng'],
  ing: ['', 'ing'],
  ong: ['', 'ong'],
  iong: ['i', 'ong'],
  er: ['', 'er'],
  ê: ['', 'ê']
};

// Initials after which the final written "i" is the empty rhyme ([ɿ]/[ʅ] in 知,
// 吃, 诗, 日, 资, 雌, 思) rather than the [i] of 比, 机, 西. The scheme spells
// both "i"; they do not rhyme.
var EMPTY_RHYME_INITIALS = {zh: 1, ch: 1, sh: 1, r: 1, z: 1, c: 1, s: 1};

// Lowercase, strip a trailing tone digit, and fold the ASCII stand-ins for ü
// (CC-CEDICT writes "lu:4"; "lv4" also occurs in the wild) onto the real letter.
function normalise(raw) {
  var text = String(raw)
    .toLowerCase()
    .trim();
  var tone = null;
  var toned = text.match(/^([a-zü:]+)([1-5])$/);
  if (toned) {
    text = toned[1];
    tone = Number(toned[2]);
  }
  text = text.replace(/u:/g, 'ü').replace(/v/g, 'ü');
  return {syllable: text, tone: tone};
}

// i 行的韵母，前面没有声母的时候，写成 yi, ya, ye, yao, you, yan, yin, yang,
// ying, yong; u 行写成 wu, wa, wo, wai, wei, wan, wen, wang, weng; ü 行写成
// yu, yue, yuan, yun.
function restoreZeroInitial(syllable) {
  var restored;
  if (syllable.charAt(0) === 'y') {
    var afterY = syllable.slice(1);
    if (afterY.charAt(0) === 'u') {
      restored = 'ü' + syllable.slice(2); // yu -> ü, yue -> üe
    } else if (afterY.charAt(0) === 'i') {
      restored = afterY; // yi -> i, yin -> in
    } else {
      restored = 'i' + afterY; // ya -> ia, you -> iou
    }
  } else if (syllable.charAt(0) === 'w') {
    var afterW = syllable.slice(1);
    restored = afterW.charAt(0) === 'u' ? afterW : 'u' + afterW; // wu -> u, wa -> ua
  } else {
    return syllable;
  }
  // Guard against spellings that are not zero-initial finals at all, such as
  // the interjection "yo": leave those for the loose-initial fallback.
  return FINALS[restored] ? restored : syllable;
}

// ü 行的韵跟声母 j, q, x 拼的时候，ü 上两点省略: ju, qu, xu are jü, qü, xü.
// n and l keep the diaeresis, so they need no restoring.
function restoreU(syllable) {
  return syllable.replace(/^([jqx])u/, '$1ü');
}

// iou, uei, uen 前面加声母的时候，写成 iu, ui, un: niu is n + iou, gui is
// g + uei, lun is l + uen. The uen rule must not touch jün/qün/xün, which
// restoreU has already spelled with ü.
function restoreAbbreviatedFinals(syllable) {
  return syllable
    .replace(/^([a-zü]+)iu$/, '$1iou')
    .replace(/^([a-zü]+)ui$/, '$1uei')
    .replace(/^([a-z]+)un$/, '$1uen');
}

function longestInitial(syllable, initials) {
  for (var i = 0; i < initials.length; i++) {
    if (syllable.indexOf(initials[i]) === 0) {
      return initials[i];
    }
  }
  return '';
}

function describe(raw, syllable, tone, initial, final) {
  var parts = FINALS[final];
  return {
    raw: raw,
    syllable: syllable,
    tone: tone,
    initial: initial,
    final: final,
    medial: parts[0],
    rhyme: parts[1],
    emptyRhyme: final === 'i' && EMPTY_RHYME_INITIALS[initial] === 1
  };
}

// Splits a pinyin syllable into its underlying initial and final.
//
// Accepts tone-numbered or toneless pinyin, in any case, with ü written as
// "ü", "u:" or "v". Returns null for anything that is not a Mandarin syllable —
// the syllabic nasals (m, n, ng, hng), the "_stroke"/"_number"/"xx" sentinels
// this library uses for componentry with no reading, and stray Latin letters
// from dictionary entries such as B超.
//
//   parse('niu2') -> {initial: 'n', final: 'iou', medial: 'i', rhyme: 'ou', ...}
//   parse('you3') -> {initial: '',  final: 'iou', medial: 'i', rhyme: 'ou', ...}
function parse(raw) {
  if (raw == null) {
    return null;
  }
  var normalised = normalise(raw);
  var syllable = normalised.syllable;
  if (!/^[a-zü]+$/.test(syllable)) {
    return null;
  }

  var restored = restoreAbbreviatedFinals(
    restoreU(restoreZeroInitial(syllable))
  );
  var initial = longestInitial(restored, INITIALS);
  var final = restored.slice(initial.length);
  if (FINALS[final]) {
    return describe(raw, syllable, normalised.tone, initial, final);
  }

  // Spellings that y/w conventions cannot account for, e.g. "yo": treat the
  // glide as an initial and see whether what remains is a legal final.
  var looseInitial = longestInitial(restored, INITIALS_LOOSE);
  var looseFinal = restored.slice(looseInitial.length);
  if (FINALS[looseFinal]) {
    return describe(raw, syllable, normalised.tone, '', looseFinal);
  }
  return null;
}

exports.parse = parse;
exports.relatedInitials = relatedInitials;
exports.INITIALS = INITIALS;
exports.INITIAL_GROUPS = INITIAL_GROUPS;
exports.FINALS = FINALS;
