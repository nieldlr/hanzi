var fs = require('fs');
var dictionary = new Array();

function start(){
	var lines = new Array();
	
	console.log("Hanzi is compiling dictionary...");
	
	//Reading in CCEDICT
	var readFile = fs.readFileSync(__dirname + '/dicts/cedict_ts.u8', 'utf-8');
	lines = readFile.split(/\r?\n/);
	
	for(var i=30; i<lines.length; i++){
		var openbracket = lines[i].indexOf('[');
		var closebracket = lines[i].indexOf(']');
		var defStart = lines[i].indexOf('/');
		var defClose = lines[i].lastIndexOf('/');
		var pinyin = lines[i].substring(openbracket+1, closebracket);
		var definition = lines[i].substring(defStart+1, defClose);
		var elements = lines[i].split(" ");
		var traditional = elements[0];
		var simplified = elements[1];
		dictionary[i-30] = new Array();
		dictionary[i-30][0] = traditional;
		dictionary[i-30][1] = simplified;
		dictionary[i-30][2] = pinyin;
		dictionary[i-30][3] = definition;
	};
};

function definitionLookup(character, scripttype){
	
	if(scripttype == "s"){
		for(var i=0; i<dictionary.length; i++){
			if(dictionary[i][1] == character){
				return dictionary[i][3];
			}
		}
	}
	else{
		for(var i=0; i<dictionary.length; i++){
			if(dictionary[i][0] == character){
				return dictionary[i][3];
			}
		}
	}
};

exports.start = start;
exports.definitionLookup = definitionLookup;
