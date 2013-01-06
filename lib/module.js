var hanzi = require("./hanzidecomposer.js");
var dict = require("./dictionary.js");

function start(){
	hanzi.start();
	dict.start();
}

exports.start = start;
exports.decompose = hanzi.decompose;
exports.decomposeMany = hanzi.decomposeMany;
exports.ifComponentExists = hanzi.ifComponentExists;
exports.definitionLookup = dict.definitionLookup;
exports.dictionarySearch = dict.dictionarySearch;
exports.getExamples = dict.getExamples;
exports.getPinyin = dict.getPinyin;
exports.comparePhoneticRadical = dict.comparePhoneticRadical;
exports.getRadicalMeaning = hanzi.getRadicalMeaning;