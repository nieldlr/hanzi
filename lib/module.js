var hanzi = require("./hanzidecomposer.js");
var dict = require("./dictionary.js");

function start(){
	hanzi.start();
	dict.start();
};

function decompose(character){
	return hanzi.decompose(character);
};

function definitionLookup(character, scripttype){
	return dict.definitionLookup(character, scripttype);
};

exports.start = start;
exports.decompose = decompose;
exports.definitionLookup = definitionLookup;