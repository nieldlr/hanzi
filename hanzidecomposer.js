var fs = require('fs');
var characters = new Array();
var radicals = new Array();

function start(){
	var i=0;
	var lines = new Array();
	
	console.log("Hanzi is reading in files...");
	
	//Reading in charData - Decomposition Database
	var readFile = fs.readFileSync(__dirname + '/charData.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
		
	for(i=0;i<lines.length; i++){
		var colonsplit = lines[i].split(':');
		var character = colonsplit[0];
		var decomposition = colonsplit[1];
		var openbracket = decomposition.indexOf('(');
		var closebracket = decomposition.indexOf(')');
		var typeOfDecomposition = decomposition.substring(0, openbracket);
		var components = decomposition.substring(openbracket+1, closebracket).split(",");
		characters[i] = new Array();
		characters[i][0] = character;
		characters[i][1] = typeOfDecomposition;
		characters[i][2] = components;
	};
	
	//Reading in radical list
	var readFile = fs.readFileSync(__dirname + '/radicalList.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
	
	for(i=0;i<lines.length; i++){
		radicals[i] = lines[i];
	};
	console.log('Hanzi has stored the files');
};

var decompose = function(character){
	if(isRadical(character)){
		return character;
	}
	else{
		var componentArray = returnComponents(character);
		/*for(var i=0; i<componentArray.length; i++){
			console.log(componentArray[i]);
			if(isRadical(componentArray[i])==false){
				console.log("Is not radical: " + componentArray[i]);
				componentArray[i] = new Array();
				componentArray[i][0] = returnComponents(componentArray[i]);
				console.log("Done lookip");
			}
			else{
				console.log("Is radical: " + componentArray[i]);
			}
		};*/
		return componentArray;
	}
};

function returnComponents(character){
	for(var i=0; i<characters.length; i++){
		if(characters[i][0] == character){
			return(characters[i][2]);
		}
	}
};

function isRadical(character){
	var isRad = false;
	for(var i=0;i<radicals.length; i++){
		if(radicals[i] == character){
			var isRad = true;
			i = radicals.length;
		}
	};
	return isRad;
};

exports.start = start;
exports.decompose = decompose;