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
	readFile = fs.readFileSync(__dirname + '/dicts/radicalList.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
	
	for(i=0;i<lines.length; i++){
		radicals[i] = lines[i];
	}
}

var decomposeMany = function(characterstring, typeOfDecomposition){
	var decomposearray = {};
	for(var i=0; i<characterstring.length; i++){
		var onechar = characterstring.substring(i, i+1);
		if(typeOfDecomposition){
			decomposearray[onechar] = decompose(onechar, typeOfDecomposition);
		}
		else{
			decomposearray[onechar] = decompose(onechar);
		}
	}
	return decomposearray;
};

var decompose = function(character, typeOfDecomposition){

	/*-- Type of Decomposition: 1 = Only 2 components， 2 = Radical, 3 = Graphical) --*/
	if(typeOfDecomposition == null){
		var object = {"character": character, "components1": onceDecompose(character), "components2": radicalDecomposition(character), "components3": graphicalDecomposition(character)};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}
	if(typeOfDecomposition==1){
		var components = onceDecompose(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}
	if(typeOfDecomposition==2){
		var components = radicalDecomposition(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}
	if(typeOfDecomposition==3){
		var components = graphicalDecomposition(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}

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
					final_array.push(radicalDecomposition(components[j]));
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
				final_array.push(graphicalDecomposition(components[j]));
			}
		}
		else{
			final_array.push(character);
		}

		return final_array;
	}

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

	function isRadical(character){
		var isRad = false;
		for(var i=0;i<radicals.length; i++){
			if(radicals[i] == character){
				isRad = true;
				i = radicals.length;
			}
		}
		return isRad;
	}
};

exports.start = start;
exports.decompose = decompose;
exports.decomposeMany = decomposeMany;