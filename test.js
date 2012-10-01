var hanzi = require('./lib/module.js');
hanzi.start();
var decomposition = hanzi.decompose('搬');
console.log("Test once decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components1);
//var decomposition = hanzi.decompose('搬', 2);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components2);
//var decomposition = hanzi.decompose('搬', 3);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components3);

var decomposition = hanzi.decompose('登', 1);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);
var decomposition = hanzi.decompose('雜', 1);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);
console.log("---------");

console.log(hanzi.definitionLookup('和'));
console.log(hanzi.definitionLookup('和乐'));
//console.log(hanzi.getPinyin('我', 's'));
//console.log(hanzi.comparePhoneticRadical('挂', '圭'));
