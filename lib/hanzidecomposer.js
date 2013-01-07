var fs = require('fs');
var characters = {};
var radicals = {};

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
		characters[character] = {
			typeOfDecomposition : typeOfDecomposition,
			components : components
		};
	}
	
	//Reading in radical list
	radicals = require('./dicts/radicalListWithMeaning').radicalListWithMeaning;
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
	var object;

	/*-- Type of Decomposition: 1 = Only 2 components， 2 = Radical, 3 = Graphical) --*/
	if(typeOfDecomposition == null){
		object = {"character": character, "components1": onceDecompose(character), "components2": radicalDecomposition(character), "components3": graphicalDecomposition(character)};
	}
	else if(typeOfDecomposition == 1){
		object = {"character": character, "components": onceDecompose(character)};
	}
	else if(typeOfDecomposition == 2){
		object = {"character": character, "components": radicalDecomposition(character)};
	}
	else if(typeOfDecomposition == 3){
		object = {"character": character, "components":  graphicalDecomposition(character)};
	} else {
		return;
	}
	var string = JSON.stringify(object);
	var jsonoutput = JSON.parse(string);
	return jsonoutput;

	//Functions to help with Decomposition

	function onceDecompose(character){
		var components = getComponents(character);
		return replaceNumbers(components);
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
		return replaceNumbers(final_array);
	}

	function graphicalDecomposition(character){
		var final_array = [];
		var components = getComponents(character);
		if(components.length == 2){
			for(var j=0; j<2; j++){
				final_array = final_array.concat(graphicalDecomposition(components[j]));
			}
		}
		else{
			if(isNaN(character)){
				final_array.push(character);
			}
			else{
				final_array = final_array.concat(resolveNumber(character));
			}
		}

		return final_array;
	}
};

function replaceNumbers(characters){
	var finalreview = [];
	for(var i=0; i<characters.length; i++){
		if(isNaN(characters[i])){
			finalreview.push(characters[i]);
		}
		else{
			finalreview.push("No glyph available");
		}
	};

	return finalreview;
}

function resolveNumber(number){
	var numberscleared = [];
	var components = getComponents(number);
	var i=0;
	for(; i<components.length; i++){
		if(isNaN(components[i])){
			numberscleared.push(components[i]);
		}
		else{
			numberscleared = numberscleared.concat(resolveNumber(components[i]));
		}
	};

	return numberscleared;
}

function isRadical(character){
		var isRad = false;
		if("undefined" != typeof radicals[character]){
			isRad = true;
		}
		return isRad;
}

function getComponents(character){
	//console.log("Looking up: "+ character);
	if(ifComponentExists(character)){
		if(characters[character].typeOfDecomposition == 'c'){
			return character;
		}
		return characters[character].components;
	}
}

function getRadicalMeaning(radical){
	if(isRadical(radical)){
		return radicals[radical];
	}
	else{
		return "N/A";
	}
}

function ifComponentExists(component){
	return "undefined" != typeof characters[component];
}

function isMessy(character){
	//If no input is sent
	if(character == null || character == ""){return true;}
	//If it's not a Chinese character
	return "undefined" == typeof getComponents(character);
}

exports.start = start;
exports.decompose = decompose;
exports.decomposeMany = decomposeMany;
exports.ifComponentExists = ifComponentExists;
exports.getRadicalMeaning = getRadicalMeaning;
