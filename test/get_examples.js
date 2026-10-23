const assert = require('assert');
const hanzi = require('../index.js');

hanzi.start();

const mostCommonLove = [
  {
    traditional: '愛',
    simplified: '爱',
    pinyin: 'ai4',
    definition:
      'to love; to be fond of; to like/affection/to be inclined (to do sth); to tend to (happen)'
  },
  {
    traditional: '親愛',
    simplified: '亲爱',
    pinyin: 'qin1 ai4',
    definition: 'dear/beloved/darling'
  },
  {
    traditional: '可愛',
    simplified: '可爱',
    pinyin: 'ke3 ai4',
    definition: 'adorable/cute/lovely'
  },
  {
    traditional: '愛情',
    simplified: '爱情',
    pinyin: 'ai4 qing2',
    definition: 'romance; love (romantic)/CL:份[fen4]'
  }
];

const simplifiedWords = band => band.map(word => word.simplified);

describe('getExamples', () => {
  it('simplified', () => {
    const examples = hanzi.getExamples('爱');
    assert.equal(examples.length, 3);
    assert.deepEqual(examples[0].slice(0, 4), mostCommonLove);
  });

  it('traditional', () => {
    const examples = hanzi.getExamples('愛');
    assert.equal(examples.length, 3);
    assert.deepEqual(examples[0].slice(0, 4), mostCommonLove);
  });

  it('uses fixed thresholds rather than the character itself', () => {
    // 你 is far more frequent than any of its words, which used to push
    // common words like 你好 into the rare band.
    const examples = hanzi.getExamples('你');
    assert.deepEqual(simplifiedWords(examples[0]), [
      '你',
      '你们',
      '你好',
      '迷你'
    ]);
  });

  it('sorts each band by frequency', () => {
    const examples = hanzi.getExamples('茶');
    assert.deepEqual(simplifiedWords(examples[0]), ['茶', '奶茶', '喝茶']);
    assert.deepEqual(simplifiedWords(examples[1]).slice(0, 3), [
      '茶叶',
      '饮茶',
      '茶馆'
    ]);
  });

  it('puts words missing from the frequency list in the rare band', () => {
    const examples = hanzi.getExamples('你');
    const total = examples[0].length + examples[1].length + examples[2].length;
    assert.equal(total, hanzi.dictionarySearch('你').length);
  });
});
