var hanzi = require("./hanzidecomposer.js");
hanzi.start();
var radicals = hanzi.decompose('河');
console.log(radicals);