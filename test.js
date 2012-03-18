var hanzi = require('./lib/module.js');
hanzi.start();
console.log(hanzi.decompose('微'));
console.log(hanzi.decompose('水'));
console.log(hanzi.definitionLookup('微', 's'));
