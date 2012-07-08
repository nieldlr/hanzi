var hanzi = require('./lib/module.js');
hanzi.start();
var decomposition = hanzi.decompose('河', 1);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);
var decomposition = hanzi.decompose('河', 2);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);

var decomposition = hanzi.decompose('登', 1);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);
var decomposition = hanzi.decompose('登', 2);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components);
console.log("---------");
/*var decomposition = hanzi.decompose('亂');
console.log("Test decomposition of complex traditional character: " + decomposition.character + " => " + decomposition.components);
//var decomposition = hanzi.decompose('雜');
console.log("Test decomposition of complex traditional character: " + decomposition.character + " => " + decomposition.components);

console.log(hanzi.definitionLookup('和', 's'));
console.log(hanzi.getPinyin('我', 's'));*/
