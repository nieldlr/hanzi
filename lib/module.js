var hanzi = require("./hanzidecomposer.js");
var dict = require("./dictionary.js");

function start(){
	hanzi.start();
	dict.start();
}

function decompose(character, typeOfDecomposition){
	return hanzi.decompose(character, typeOfDecomposition);
}

function decomposeMany(characterstring, typeOfDecomposition){
	return hanzi.decomposeMany(characterstring, typeOfDecomposition);
}

function definitionLookup(character, scripttype){
	return dict.definitionLookup(character, scripttype);
}

function dictionarySearch(character, type){
	return dict.dictionarySearch(character, type);
}

function getPinyin(character, scripttype){
	return dict.getPinyin(character, scripttype);
}

function comparePhoneticRadical(character, phonetic){
	return dict.comparePhoneticRadical(character, phonetic);
}
exports.start = start;
exports.decompose = decompose;
exports.decomposeMany = decomposeMany;
exports.definitionLookup = definitionLookup;
exports.dictionarySearch = dictionarySearch;
exports.getPinyin = getPinyin;
exports.comparePhoneticRadical = comparePhoneticRadical;