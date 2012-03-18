var hanzi = require('./lib/module.js');
hanzi.start();
var radicals = hanzi.decompose('微');
console.log(radicals);
var radicals2 = hanzi.decompose('水');
console.log(radicals2);
var definition = hanzi.dictionaryLookup('微', 's');
console.log(definition);