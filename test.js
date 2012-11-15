var hanzi = require('./lib/module.js');
hanzi.start();

//Simplified Tests

console.log("SIMPLIFIED CHARACTER TESTS");

var decomposition = hanzi.decompose('爱');
console.log("Test once decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components1);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components2);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components3);

console.log("---------");

var decompositionmany = hanzi.decomposeMany("和挂爱");
console.log("Test many decomposition: ");
console.log(decompositionmany);

var singlelookup = hanzi.definitionLookup('爱');
console.log("Test single lookup of dictionary entry: ");
console.log(singlelookup);

var examples = hanzi.getExamples("爱");
console.log("Test examples words from character: ");
console.log(examples);
console.log(examples[0]);

//Traditional Tests

console.log("TRADITIONAL CHARACTER TESTS");

var decomposition = hanzi.decompose('愛');
console.log("Test once decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components1);
console.log("Test radical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components2);
console.log("Test graphical decomposition of simplifed character: " + decomposition.character + " => " + decomposition.components3);

console.log("---------");

var singlelookup = hanzi.definitionLookup('愛');
console.log("Test single lookup of dictionary entry: ");
console.log(singlelookup);

var examples = hanzi.getExamples("愛");
console.log("Test examples words from character: ");
console.log(examples);
console.log(examples[0]);