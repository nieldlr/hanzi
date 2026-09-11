const assert = require('assert');
const hanzi = require('../index.js');

hanzi.start();

describe('hanzidictionary', function() {
  it('should look up a definition', function() {
    var expected = [
      {
        traditional: '愛',
        simplified: '爱',
        pinyin: 'ai4',
        definition:
          'to love; to be fond of; to like/affection/to be inclined (to do sth); to tend to (happen)'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('爱'), expected);
    assert.deepEqual(hanzi.definitionLookup('愛'), expected);
  });
  it('should look up a simplified definition with simplified character', function() {
    var expected = [
      {
        traditional: '愛',
        simplified: '爱',
        pinyin: 'ai4',
        definition:
          'to love; to be fond of; to like/affection/to be inclined (to do sth); to tend to (happen)'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('爱', 's'), expected);
  });
  it('should look up a traditional definition with traditional character', function() {
    var expected = [
      {
        traditional: '愛',
        simplified: '爱',
        pinyin: 'ai4',
        definition:
          'to love; to be fond of; to like/affection/to be inclined (to do sth); to tend to (happen)'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('愛', 't'), expected);
  });
  it('should fail looking up a simplified definition with a traditional character', function() {
    assert.deepEqual(hanzi.definitionLookup('愛', 's'), undefined);
  });
  it('should fail looking up a traditional definition with a simplified character', function() {
    assert.deepEqual(hanzi.definitionLookup('爱', 't'), undefined);
  });
  it('should look up a definition with multiple characters', function() {
    var expected = [
      {
        traditional: '最後',
        simplified: '最后',
        pinyin: 'zui4 hou4',
        definition: 'final; last; ultimate/finally; in the end'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('最后'), expected);
  });

  it('should look up a definition with multiple meanings with a common character', function() {
    var expected = [
      {
        traditional: '咊',
        simplified: '和',
        pinyin: 'he2',
        definition: 'old variant of 和[he2]'
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'He2',
        definition: 'surname He'
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'he2',
        definition:
          '(joining two nouns) and; together with; with (Taiwan pr. [han4])/(math.) sum/to make peace/(sports) to draw; to tie/(bound form) harmonious/(bound form) Japan; Japanese'
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'he4',
        definition:
          "to compose a poem in reply (to sb's poem) using the same rhyme sequence/to join in the singing/to chime in with others"
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'hu2',
        definition: 'to complete a set in mahjong or playing cards'
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'huo2',
        definition:
          'to combine a powdery substance (flour, plaster etc) with water/Taiwan pr. [huo4]'
      },
      {
        traditional: '和',
        simplified: '和',
        pinyin: 'huo4',
        definition:
          'to mix (ingredients) together/to blend/classifier for rinses of clothes/classifier for boilings of medicinal herbs'
      },
      {
        traditional: '龢',
        simplified: '和',
        pinyin: 'he2',
        definition: '(literary) harmonious (variant of 和[he2])'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('和'), expected);
  });

  it('should look up a definition with multiple meanings with a more obscure character', function() {
    var expected = [
      {
        traditional: '糺',
        simplified: '糺',
        pinyin: 'jiu3',
        definition: 'army (used during the Liao, Jin and Yuan dynasties)'
      },
      {
        traditional: '糺',
        simplified: '纠',
        pinyin: 'jiu1',
        definition: 'old variant of 糾|纠[jiu1]'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('糺'), expected);
  });

  it('should look up a definition of 参 for a traditional variant 參 that has multiple simplified variants', function() {
    var expected = [
      {
        traditional: '㕘',
        simplified: '参',
        pinyin: 'can1',
        definition: 'variant of 參|参[can1]'
      },
      {
        traditional: '參',
        simplified: '参',
        pinyin: 'can1',
        definition:
          'to take part in/to participate/to join/to attend/to counsel/unequal/varied/irregular/uneven/not uniform/abbr. for 參議院|参议院 Senate, Upper House'
      },
      {
        traditional: '參',
        simplified: '参',
        pinyin: 'cen1',
        definition: 'used in 參差|参差[cen1 ci1]'
      },
      {
        traditional: '參',
        simplified: '参',
        pinyin: 'shen1',
        definition: 'ginseng/one of the 28 constellations'
      },
      {
        traditional: '叅',
        simplified: '参',
        pinyin: 'can1',
        definition: 'old variant of 參|参[can1]'
      },
      {
        traditional: '葠',
        simplified: '参',
        pinyin: 'shen1',
        definition: 'variant of 參|参[shen1]'
      },
      {
        traditional: '蓡',
        simplified: '参',
        pinyin: 'shen1',
        definition: 'variant of 參|参[shen1]'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('参'), expected);
  });

  it('should look up a definition of 了 correctly which multiple entries across the whole dictionary', function() {
    var expected = [
      {
        traditional: '了',
        simplified: '了',
        pinyin: 'le5',
        definition:
          '(completed action marker)/(modal particle indicating change of state, situation now)/(modal particle intensifying preceding clause)'
      },
      {
        traditional: '了',
        simplified: '了',
        pinyin: 'liao3',
        definition:
          'to finish/(used with 得[de2] or 不[bu4] after a verb to express (im)possibility, as in 忘不了[wang4 bu5 liao3] "cannot forget")/(literary) (usually followed by a negative such as 無|无[wu2] or 不[bu4]) completely (not); entirely (not); (not) in the least/variant of 瞭|了[liao3]'
      },
      {
        traditional: '瞭',
        simplified: '了',
        pinyin: 'liao3',
        definition: "(bound form) clear in one's mind; to understand clearly"
      },
      {
        traditional: '瞭',
        simplified: '了',
        pinyin: 'liao4',
        definition: 'unofficial variant of 瞭[liao4]'
      }
    ];
    assert.deepEqual(hanzi.definitionLookup('了'), expected);
  });

  it('should fail looking up a definition with dirty input', function() {
    assert.deepEqual(hanzi.definitionLookup('%'), undefined);
  });

  it('should do a dictionary search with a common character', function() {
    var expected = [
      [
        {
          traditional: '㝡',
          simplified: '最',
          pinyin: 'zui4',
          definition: 'variant of 最[zui4]'
        },
        {
          traditional: '冣',
          simplified: '最',
          pinyin: 'zui4',
          definition: 'old variant of 最[zui4]'
        },
        {
          traditional: '最',
          simplified: '最',
          pinyin: 'zui4',
          definition:
            '(before an adjective or verb) to the highest degree; (the) most ...; -est/(after 之[zhi1]) best or most extreme example (e.g. 世界之最[shi4 jie4 zhi1 zui4] "the greatest in the world")'
        }
      ],
      [
        {
          traditional: '六方最密堆積',
          simplified: '六方最密堆积',
          pinyin: 'liu4 fang1 zui4 mi4 dui1 ji1',
          definition: 'hexagonal close-packed (HCP) (math.)'
        }
      ],
      [
        {
          traditional: '壓死駱駝的最後一根稻草',
          simplified: '压死骆驼的最后一根稻草',
          pinyin: 'ya1 si3 luo4 tuo5 de5 zui4 hou4 yi1 gen1 dao4 cao3',
          definition:
            'the straw that broke the camel’s back (idiom)/the final straw'
        }
      ],
      [
        {
          traditional: '帕累托最優',
          simplified: '帕累托最优',
          pinyin: 'Pa4 lei4 tuo1 zui4 you1',
          definition: 'Pareto efficiency (economics)/Pareto optimality'
        }
      ],
      [
        {
          traditional: '最低潮',
          simplified: '最低潮',
          pinyin: 'zui4 di1 chao2',
          definition:
            'lit. low tide/fig. the lowest point (e.g. of a relationship)'
        }
      ],
      [
        {
          traditional: '最低谷',
          simplified: '最低谷',
          pinyin: 'zui4 di1 gu3',
          definition: 'lowest point/nadir'
        }
      ],
      [
        {
          traditional: '最低限度',
          simplified: '最低限度',
          pinyin: 'zui4 di1 xian4 du4',
          definition:
            'the bare minimum; the lowest acceptable limit or standard'
        }
      ],
      [
        {
          traditional: '最低音',
          simplified: '最低音',
          pinyin: 'zui4 di1 yin1',
          definition: 'lowest voice/lowest pitch/lowest note'
        }
      ],
      [
        {
          traditional: '最低點',
          simplified: '最低点',
          pinyin: 'zui4 di1 dian3',
          definition: 'lowest point; nadir; minimum level'
        }
      ],
      [
        {
          traditional: '最佳',
          simplified: '最佳',
          pinyin: 'zui4 jia1',
          definition: 'optimum/optimal/peak/best (athlete, movie etc)'
        }
      ],
      [
        {
          traditional: '最佳化',
          simplified: '最佳化',
          pinyin: 'zui4 jia1 hua4',
          definition: '(computing, math.) to optimize'
        }
      ],
      [
        {
          traditional: '最優',
          simplified: '最优',
          pinyin: 'zui4 you1',
          definition: 'optimal/optimum'
        }
      ],
      [
        {
          traditional: '最優化',
          simplified: '最优化',
          pinyin: 'zui4 you1 hua4',
          definition: 'optimization (math.)'
        }
      ],
      [
        {
          traditional: '最優解',
          simplified: '最优解',
          pinyin: 'zui4 you1 jie3',
          definition: 'optimal solution'
        }
      ],
      [
        {
          traditional: '最先',
          simplified: '最先',
          pinyin: 'zui4 xian1',
          definition: '(the) very first'
        }
      ],
      [
        {
          traditional: '最初',
          simplified: '最初',
          pinyin: 'zui4 chu1',
          definition:
            'first/primary/initial/original/at first/initially/originally'
        }
      ],
      [
        {
          traditional: '最喜愛',
          simplified: '最喜爱',
          pinyin: 'zui4 xi3 ai4',
          definition: 'favorite'
        }
      ],
      [
        {
          traditional: '最多',
          simplified: '最多',
          pinyin: 'zui4 duo1',
          definition: 'at most/maximum/greatest (amount)/maximal'
        }
      ],
      [
        {
          traditional: '最大似然估計',
          simplified: '最大似然估计',
          pinyin: 'zui4 da4 si4 ran2 gu1 ji4',
          definition: 'maximum-likelihood estimation (statistics)'
        }
      ],
      [
        {
          traditional: '最大公因子',
          simplified: '最大公因子',
          pinyin: 'zui4 da4 gong1 yin1 zi3',
          definition:
            '(math.) highest common factor (HCF); greatest common divisor (GCD)'
        }
      ],
      [
        {
          traditional: '最大公約數',
          simplified: '最大公约数',
          pinyin: 'zui4 da4 gong1 yue1 shu4',
          definition:
            '(math.) highest common factor (HCF); greatest common divisor (GCD)'
        }
      ],
      [
        {
          traditional: '最大化',
          simplified: '最大化',
          pinyin: 'zui4 da4 hua4',
          definition: 'to maximize'
        }
      ],
      [
        {
          traditional: '最大速率',
          simplified: '最大速率',
          pinyin: 'zui4 da4 su4 lu:4',
          definition: 'maximum speed; maximum velocity'
        }
      ],
      [
        {
          traditional: '最好',
          simplified: '最好',
          pinyin: 'zui4 hao3',
          definition: 'best/had better ...; it would be best to ...'
        }
      ],
      [
        {
          traditional: '最好是',
          simplified: '最好是',
          pinyin: 'zui4 hao3 shi4',
          definition:
            '(as a complete expression, or followed by 啦[la5]) (coll.) Yeah, right! As if!'
        }
      ],
      [
        {
          traditional: '最密堆積',
          simplified: '最密堆积',
          pinyin: 'zui4 mi4 dui1 ji1',
          definition: 'close-packing of spheres (math.)'
        }
      ],
      [
        {
          traditional: '最小二乘',
          simplified: '最小二乘',
          pinyin: 'zui4 xiao3 er4 cheng2',
          definition: '(math.) least squares'
        }
      ],
      [
        {
          traditional: '最小二乘法',
          simplified: '最小二乘法',
          pinyin: 'zui4 xiao3 er4 cheng2 fa3',
          definition: '(math.) least squares method'
        }
      ],
      [
        {
          traditional: '最小值',
          simplified: '最小值',
          pinyin: 'zui4 xiao3 zhi2',
          definition: 'least value/minimum'
        }
      ],
      [
        {
          traditional: '最小公倍數',
          simplified: '最小公倍数',
          pinyin: 'zui4 xiao3 gong1 bei4 shu4',
          definition: 'least common multiple'
        }
      ],
      [
        {
          traditional: '最小公分母',
          simplified: '最小公分母',
          pinyin: 'zui4 xiao3 gong1 fen1 mu3',
          definition: 'lowest common denominator'
        }
      ],
      [
        {
          traditional: '最小化',
          simplified: '最小化',
          pinyin: 'zui4 xiao3 hua4',
          definition: 'to minimize'
        }
      ],
      [
        {
          traditional: '最小平方法',
          simplified: '最小平方法',
          pinyin: 'zui4 xiao3 ping2 fang1 fa3',
          definition: 'method of least squares (math.) (Tw)'
        }
      ],
      [
        {
          traditional: '最少',
          simplified: '最少',
          pinyin: 'zui4 shao3',
          definition: 'at least/minimum/lowest (amount)/minimal'
        }
      ],
      [
        {
          traditional: '最年長',
          simplified: '最年长',
          pinyin: 'zui4 nian2 zhang3',
          definition: 'eldest'
        }
      ],
      [
        {
          traditional: '最後',
          simplified: '最后',
          pinyin: 'zui4 hou4',
          definition: 'final; last; ultimate/finally; in the end'
        }
      ],
      [
        {
          traditional: '最後一天',
          simplified: '最后一天',
          pinyin: 'zui4 hou4 yi1 tian1',
          definition: 'final day'
        }
      ],
      [
        {
          traditional: '最後晚餐',
          simplified: '最后晚餐',
          pinyin: 'zui4 hou4 wan3 can1',
          definition: 'the Last Supper (in the biblical Passion story)'
        }
      ],
      [
        {
          traditional: '最後期限',
          simplified: '最后期限',
          pinyin: 'zui4 hou4 qi1 xian4',
          definition: 'deadline/final time limit (for project)'
        }
      ],
      [
        {
          traditional: '最後的晚餐',
          simplified: '最后的晚餐',
          pinyin: 'Zui4 hou4 de5 Wan3 can1',
          definition: 'the Last Supper (in the Christian Passion story)'
        }
      ],
      [
        {
          traditional: '最後通牒',
          simplified: '最后通牒',
          pinyin: 'zui4 hou4 tong1 die2',
          definition: 'ultimatum'
        }
      ],
      [
        {
          traditional: '最惠國',
          simplified: '最惠国',
          pinyin: 'zui4 hui4 guo2',
          definition: 'most-favored nation (trade status)'
        }
      ],
      [
        {
          traditional: '最惠國待遇',
          simplified: '最惠国待遇',
          pinyin: 'zui4 hui4 guo2 dai4 yu4',
          definition: 'most favored nation'
        }
      ],
      [
        {
          traditional: '最新',
          simplified: '最新',
          pinyin: 'zui4 xin1',
          definition: 'latest/newest'
        }
      ],
      [
        {
          traditional: '最是',
          simplified: '最是',
          pinyin: 'zui4 shi4',
          definition:
            '(before an adjective, to indicate superlative degree) the most .../(literary) what exemplifies this particular quality to the highest degree is ...'
        }
      ],
      [
        {
          traditional: '最為',
          simplified: '最为',
          pinyin: 'zui4 wei2',
          definition: 'the most'
        }
      ],
      [
        {
          traditional: '最終',
          simplified: '最终',
          pinyin: 'zui4 zhong1',
          definition: 'final; ultimate'
        }
      ],
      [
        {
          traditional: '最終幻想',
          simplified: '最终幻想',
          pinyin: 'Zui4 zhong1 Huan4 xiang3',
          definition: 'Final Fantasy (video game)'
        }
      ],
      [
        {
          traditional: '最近',
          simplified: '最近',
          pinyin: 'zui4 jin4',
          definition: 'recently/soon/nearest'
        }
      ],
      [
        {
          traditional: '最近幾年',
          simplified: '最近几年',
          pinyin: 'zui4 jin4 ji3 nian2',
          definition: 'the last few years/last several years/recent years'
        }
      ],
      [
        {
          traditional: '最遠',
          simplified: '最远',
          pinyin: 'zui4 yuan3',
          definition: 'furthest/most distant/at maximum distance'
        }
      ],
      [
        {
          traditional: '最高',
          simplified: '最高',
          pinyin: 'zui4 gao1',
          definition: 'tallest/highest/supreme (court etc)'
        }
      ],
      [
        {
          traditional: '最高人民檢察院',
          simplified: '最高人民检察院',
          pinyin: 'Zui4 gao1 Ren2 min2 Jian3 cha2 yuan4',
          definition: "PRC Supreme People's Procuratorate (prosecutor's office)"
        }
      ],
      [
        {
          traditional: '最高人民法院',
          simplified: '最高人民法院',
          pinyin: 'Zui4 gao1 Ren2 min2 Fa3 yuan4',
          definition: "Supreme People's Court (PRC)"
        }
      ],
      [
        {
          traditional: '最高工資限額',
          simplified: '最高工资限额',
          pinyin: 'zui4 gao1 gong1 zi1 xian4 e2',
          definition: 'wage ceiling'
        }
      ],
      [
        {
          traditional: '最高法院',
          simplified: '最高法院',
          pinyin: 'zui4 gao1 fa3 yuan4',
          definition: 'supreme court'
        }
      ],
      [
        {
          traditional: '最高等',
          simplified: '最高等',
          pinyin: 'zui4 gao1 deng3',
          definition: 'highest level/top class'
        }
      ],
      [
        {
          traditional: '最高限額',
          simplified: '最高限额',
          pinyin: 'zui4 gao1 xian4 e2',
          definition: 'maximum amount/ceiling/upper limit/quota'
        }
      ],
      [
        {
          traditional: '最高音',
          simplified: '最高音',
          pinyin: 'zui4 gao1 yin1',
          definition: 'highest voice/highest pitch/highest note'
        }
      ],
      [
        {
          traditional: '為善最樂',
          simplified: '为善最乐',
          pinyin: 'wei2 shan4 zui4 le4',
          definition: 'doing good deeds brings the greatest joy (idiom)'
        }
      ],
      [
        {
          traditional: '真聲最高音',
          simplified: '真声最高音',
          pinyin: 'zhen1 sheng1 zui4 gao1 yin1',
          definition:
            '(music) the highest note one can sing in a natural (non-falsetto) voice'
        }
      ],
      [
        {
          traditional: '美國最高法院',
          simplified: '美国最高法院',
          pinyin: 'Mei3 guo2 Zui4 gao1 Fa3 yuan4',
          definition: 'Supreme Court of the United States'
        }
      ],
      [
        {
          traditional: '蘇聯最高蘇維埃',
          simplified: '苏联最高苏维埃',
          pinyin: 'Su1 lian2 Zui4 gao1 Su1 wei2 ai1',
          definition: 'Supreme Soviet'
        }
      ],
      [
        {
          traditional: '誰笑到最後，誰笑得最好',
          simplified: '谁笑到最后，谁笑得最好',
          pinyin: 'shei2 xiao4 dao4 zui4 hou4 , shei2 xiao4 de2 zui4 hao3',
          definition: 'He laughs best who laughs last.'
        }
      ],
      [
        {
          traditional: '誰笑在最後，誰笑得最好',
          simplified: '谁笑在最后，谁笑得最好',
          pinyin: 'shei2 xiao4 zai4 zui4 hou4 , shei2 xiao4 de2 zui4 hao3',
          definition: 'He laughs best who laughs last.'
        }
      ],
      [
        {
          traditional: '面心立方最密堆積',
          simplified: '面心立方最密堆积',
          pinyin: 'mian4 xin1 li4 fang1 zui4 mi4 dui1 ji1',
          definition: 'face-centered cubic (FCC) (math.)'
        }
      ]
    ];
    assert.deepEqual(hanzi.dictionarySearch('最'), expected);
  });

  it('should do a dictionary search and return words with only that entry', function() {
    var expected = [
      [
        {
          traditional: '爸',
          simplified: '爸',
          pinyin: 'ba4',
          definition: 'father/dad/pa/papa'
        }
      ],
      [
        {
          traditional: '爸爸',
          simplified: '爸爸',
          pinyin: 'ba4 ba5',
          definition: '(coll.) father; dad/CL:位[wei4]'
        }
      ]
    ];
    assert.deepEqual(hanzi.dictionarySearch('爸', 'only'), expected);
  });

  it('should now do a dictionary search with the same character and ignore the only condition', function() {
    var expected = [
      [
        {
          traditional: '兔爸',
          simplified: '兔爸',
          pinyin: 'tu4 ba4',
          definition: 'toolbar (in computer software) (loanword)'
        }
      ],
      [
        {
          traditional: '單親爸爸',
          simplified: '单亲爸爸',
          pinyin: 'dan1 qin1 ba4 ba5',
          definition: 'single father'
        }
      ],
      [
        {
          traditional: '奶爸',
          simplified: '奶爸',
          pinyin: 'nai3 ba4',
          definition: 'stay-at-home dad'
        }
      ],
      [
        {
          traditional: '寶爸',
          simplified: '宝爸',
          pinyin: 'bao3 ba4',
          definition: 'a dad (father of a young child)'
        }
      ],
      [
        {
          traditional: '後爸',
          simplified: '后爸',
          pinyin: 'hou4 ba4',
          definition: '(coll.) stepfather'
        }
      ],
      [
        {
          traditional: '爸',
          simplified: '爸',
          pinyin: 'ba4',
          definition: 'father/dad/pa/papa'
        }
      ],
      [
        {
          traditional: '爸媽',
          simplified: '爸妈',
          pinyin: 'ba4 ma1',
          definition: 'dad and mom'
        }
      ],
      [
        {
          traditional: '爸比',
          simplified: '爸比',
          pinyin: 'ba3 bi2',
          definition: '(loanword) daddy'
        }
      ],
      [
        {
          traditional: '爸爸',
          simplified: '爸爸',
          pinyin: 'ba4 ba5',
          definition: '(coll.) father; dad/CL:位[wei4]'
        }
      ],
      [
        {
          traditional: '老爸',
          simplified: '老爸',
          pinyin: 'lao3 ba4',
          definition: 'father; dad'
        }
      ],
      [
        {
          traditional: '親爸',
          simplified: '亲爸',
          pinyin: 'qin1 ba4',
          definition: "one's own father/biological father"
        }
      ],
      [
        {
          traditional: '阿爸',
          simplified: '阿爸',
          pinyin: 'A1 ba4',
          definition:
            'Abba (Aramaic word father)/by ext. God the Father in Christian gospel'
        },
        {
          traditional: '阿爸',
          simplified: '阿爸',
          pinyin: 'a1 ba4',
          definition: '(dialect) father'
        }
      ],
      [
        {
          traditional: '阿爸父',
          simplified: '阿爸父',
          pinyin: 'A1 ba4 fu4',
          definition:
            'Abba (Aramaic word father)/by ext. God the Father in Christian gospel'
        }
      ]
    ];
    assert.deepEqual(hanzi.dictionarySearch('爸'), expected);
  });

  function collectSearchWords(character) {
    var words = {};
    hanzi.dictionarySearch(character).forEach(function(entries) {
      entries.forEach(function(entry) {
        words[entry.traditional] = true;
      });
    });
    return Object.keys(words);
  }

  function assertSearchIncludes(character, expectedwords) {
    var words = collectSearchWords(character);
    expectedwords.forEach(function(word) {
      assert.ok(
        words.indexOf(word) != -1,
        'expected search for ' + character + ' to include ' + word
      );
    });
  }

  it('should find traditional-index words for a dual-script character', function() {
    // 於 exists as a simplified headword (the wu1 sense), which used to
    // suppress the traditional scan entirely.
    assertSearchIncludes('於', ['於是', '由於', '終於', '等於', '屬於']);
    assertSearchIncludes('乾', ['乾淨', '餅乾', '乾杯', '乾坤']);
    assertSearchIncludes('著', ['著急', '穿著', '著名']);
    assertSearchIncludes('徵', ['特徵', '象徵', '徵求']);
    assertSearchIncludes('藉', ['藉口', '慰藉']);
    assertSearchIncludes('嚥', ['嚥氣']);
  });

  it('should not return duplicate entries for words present in both indexes', function() {
    var counts = {};
    hanzi.dictionarySearch('爸').forEach(function(entries) {
      entries.forEach(function(entry) {
        var key = entry.traditional + entry.pinyin + entry.definition;
        counts[key] = (counts[key] || 0) + 1;
      });
    });
    for (var key in counts) {
      assert.equal(counts[key], 1, 'duplicate entry for ' + key);
    }
  });
});
