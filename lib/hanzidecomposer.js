var fs = require('fs');
var characters = new Array();
var radicals = new Array();

function start(){
	var i=0;
	var lines = new Array();
	
	console.log("Hanzi is compiling radicals...");
	
	//Reading in charData - Decomposition Database
	var readFile = fs.readFileSync(__dirname+'/dicts/charData.txt', 'utf-8');
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
	var readFile = fs.readFileSync(__dirname + '/dicts/radicalList.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
	
	for(i=0;i<lines.length; i++){
		radicals[i] = lines[i];
	};
};

var decompose = function(character){
	//console.log(++recnr);
	if(isRadical(character)){
		//console.log(character + " is a radical");
		return character;
	}
	//console.log("The item to decompose is: " + character);
	var components = getComponents(character);
	//console.log("It was decomposed into: " + components);
	var final_array = new Array();
	
	for(var j=0; j<2; j++){
		if(isNaN(components[j])==false){
			final_array[j] = decompose(components[j]);
			//console.log(components[j] + " is a number thus dissects to " + final_array[j]);
		}
		else{
			final_array[j] = components[j];
			//console.log("Not number add component " + final_array[j] + " on decompose time nr: " + recnr);
			
		}
		//console.log("Final array now looks like: " + final_array);
	};
	//console.log("Return " + final_array);
	return final_array;
};

function getComponents(character){
	//console.log("Looking up: "+ character);
	for(var i=0; i<characters.length; i++){
		if(characters[i][0] == character){
			if(characters[i][1]=='c'){
				return character;
			}
			else{
				return(characters[i][2]);
			}
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