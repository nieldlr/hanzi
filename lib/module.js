var hanzi = require("./hanzidecomposer.js");
var dict = require("./dictionary.js");

function start(){
	hanzi.start();
	dict.start();
};

function decompose(character, typeOfDecomposition){
	return hanzi.decompose(character, typeOfDecomposition);
};

function definitionLookup(character, scripttype){
	return dict.definitionLookup(character, scripttype);
};

function getPinyin(character, scripttype){
	return dict.getPinyin(character, scripttype);
};
exports.start = start;
exports.decompose = decompose;
exports.definitionLookup = definitionLookup;
exports.getPinyin = getPinyin;