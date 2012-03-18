var hanzi = require("./hanzidecomposer.js");
hanzi.start();
var radicals = hanzi.decompose('河');
console.log(radicals);
var radicals2 = hanzi.decompose('水');
console.log(radicals2);