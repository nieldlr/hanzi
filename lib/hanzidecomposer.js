var fs = require('fs');
var characters = new Array();
var radicals = new Array();

function start(){
	var i=0;
	var lines = new Array();
	
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

var decompose = function(character, typeOfDecomposition){
	//console.log(character);
	/*-- Type of Decomposition: 1 = Radical, 2 = Graphical, 3 = Only 2 components) --*/
	if(typeOfDecomposition == null){
		typeOfDecomposition = 1;
	}
	if(typeOfDecomposition==1){
		var components = radicalDecomposition(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}
	if(typeOfDecomposition==2){
		var components = graphicalDecomposition(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}

	if(typeOfDecomposition==3){
		var components = onceDecompose(character);
		var object = {"character": character, "components": components};
		var string = JSON.stringify(object);
		var jsonoutput = JSON.parse(string);
		return jsonoutput;
	}

	//Functions to help with Decomposition

	function onceDecompose(character){
		var final_array = [];
		var components = getComponents(character);
		final_array.push(components[0]);
		final_array.push(components[1]);
		return final_array;
	}

	function radicalDecomposition(character){
		var final_array = new Array();
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
	};

	function graphicalDecomposition(character){
		var final_array = new Array();
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
};

exports.start = start;
exports.decompose = decompose;