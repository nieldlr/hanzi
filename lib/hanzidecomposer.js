var fs = require('fs');
var characters = [];
var radicals = [];

function start(){
	var i=0;
	var lines = [];
	
	console.log("Hanzi is compiling radicals...");
	
	//Reading in charData - Decomposition Database
	var readFile = fs.readFileSync(__dirname+'/dicts/cjk-decomp.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
		
	for(i=0;i<lines.length; i++){
		var colonsplit = lines[i].split(':');
		var character = colonsplit[0];
		var decomposition = colonsplit[1];
		var openbracket = decomposition.indexOf('(');
		var closebracket = decomposition.indexOf(')');
		var typeOfDecomposition = decomposition.substring(0, openbracket);
		var components = decomposition.substring(openbracket+1, closebracket).split(",");
		characters[i] = [character, typeOfDecomposition, components];
	}
	
	//Reading in radical list
	radicals = require('./dicts/radicalList').radicalList;
}

var decomposeMany = function(characterstring, typeOfDecomposition){
	var decomposearray = {};
	characterstring = characterstring.replace(/\s/g,'');
	if(characterstring == null || characterstring == ''){return "Invalid Input";}
	console.log(characterstring);
	for(var i=0; i<characterstring.length; i++){
		var onechar = characterstring.substring(i, i+1);
		if(typeOfDecomposition){
			if("undefined" != typeof getComponents(onechar)){
				decomposearray[onechar] = decompose(onechar, typeOfDecomposition);
			}
		}
		else{
			if("undefined" != typeof getComponents(onechar)){
				decomposearray[onechar] = decompose(onechar, typeOfDecomposition);
			}
		}
	}
	return decomposearray;
};

var decompose = function(character, typeOfDecomposition){
	character = character.replace(/\s/g,'');
	if(isMessy(character)){return "Invalid Input";}
	var components;
	var object;

	/*-- Type of Decomposition: 1 = Only 2 components， 2 = Radical, 3 = Graphical) --*/
	if(typeOfDecomposition == null){
		object = {"character": character, "components1": onceDecompose(character), "components2": radicalDecomposition(character), "components3": graphicalDecomposition(character)};
	}
	else if(typeOfDecomposition == 1){
		components = onceDecompose(character);
		object = {"character": character, "components": components};
	}
	else if(typeOfDecomposition == 2){
		components = radicalDecomposition(character);
		object = {"character": character, "components": components};
	}
	else if(typeOfDecomposition == 3){
		components = graphicalDecomposition(character);
		object = {"character": character, "components": components};
	} else {
		return;
	}
	var string = JSON.stringify(object);
	var jsonoutput = JSON.parse(string);
	return jsonoutput;

	//Functions to help with Decomposition

	function onceDecompose(character){
		var components = getComponents(character);
		var final_array = [components[0], components[1]];
		return final_array;
	}

	function radicalDecomposition(character){
		var final_array = [];
		if(isRadical(character)){
			final_array.push(character);
		}
		else{
			var components = getComponents(character);
			if(components.length==2){
				for(var j=0; j<2; j++){
					final_array = final_array.concat(radicalDecomposition(components[j]));
				}
			}
			else{
				final_array.push(character);
			}
		}
		return final_array;
	}

	function graphicalDecomposition(character){
		var final_array = [];
		var components = getComponents(character);
		//console.log("components length: "+ components.length);
		if(components.length == 2){
			for(var j=0; j<2; j++){
				final_array = final_array.concat(graphicalDecomposition(components[j]));
			}
		}
		else{
			final_array.push(character);
		}

		return final_array;
	}

	function isRadical(character){
		var isRad = false;
		for(var i=0;i<radicals.length; i++){
			if(radicals[i] == character){
				isRad = true;
				break;
			}
		}
		return isRad;
	}
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
}

function isMessy(character){
	//If no input is sent
	if(character == null || character == ""){return true;}
	//If it's not a Chinese character
	if("undefined" == typeof getComponents(character)){return true;}

	return false;
}

exports.start = start;
exports.decompose = decompose;
exports.decomposeMany = decomposeMany;