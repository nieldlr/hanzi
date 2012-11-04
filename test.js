var hanzi = require('./lib/module.js');
hanzi.start();
var decomposition = hanzi.decompose('搬');
console.log("Test once decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components1);
//var decomposition = hanzi.decompose('搬', 2);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components2);
//var decomposition = hanzi.decompose('搬', 3);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components3);

console.log("---------");
console.log(hanzi.comparePhoneticRadical('搬', decomposition.components1[1]));
var decompositionmany = hanzi.decomposeMany("和挂搬");
console.log(decompositionmany);

//var search = hanzi.dictionarySearch('光');
//console.log(search);

var examples = hanzi.getExamples("挂");
//console.log(examples);

//console.log(hanzi.definitionLookup('和'));
//console.log(hanzi.definitionLookup('和乐'));
//console.log(hanzi.getPinyin('我', 's'));
//console.log(hanzi.comparePhoneticRadical('挂', '圭'));
