const assert = require('assert');
const hanzi = require('../index.js');

hanzi.start();

describe('getExamples', () => {
  it('simplified', () => {
    const examples = hanzi.getExamples('爱');
    assert.equal(examples.length, 3);
    assert.deepEqual(examples[0], [
      {
        traditional: '可愛',
        simplified: '可爱',
        pinyin: 'ke3 ai4',
        definition: 'adorable/cute/lovely'
      },
      {
        traditional: '愛',
        simplified: '爱',
        pinyin: 'ai4',
        definition: 'to love/affection/to be fond of/to like'
      },
      {
        traditional: '愛情',
        simplified: '爱情',
        pinyin: 'ai4 qing2',
        definition: 'romance/love (romantic)/CL:個|个[ge4],份[fen4]'
      },
      {
        traditional: '親愛',
        simplified: '亲爱',
        pinyin: 'qin1 ai4',
        definition: 'dear/beloved/darling'
      }
    ]);
  });

  it('traditional', () => {
    const examples = hanzi.getExamples('愛');

    assert.equal(examples.length, 3);
    assert.deepEqual(examples[0], [
      {
        traditional: '可愛',
        simplified: '可爱',
        pinyin: 'ke3 ai4',
        definition: 'adorable/cute/lovely'
      },
      {
        traditional: '愛',
        simplified: '爱',
        pinyin: 'ai4',
        definition: 'to love/affection/to be fond of/to like'
      },
      {
        traditional: '愛情',
        simplified: '爱情',
        pinyin: 'ai4 qing2',
        definition: 'romance/love (romantic)/CL:個|个[ge4],份[fen4]'
      },
      {
        traditional: '親愛',
        simplified: '亲爱',
        pinyin: 'qin1 ai4',
        definition: 'dear/beloved/darling'
      }
    ]);
  });
});
