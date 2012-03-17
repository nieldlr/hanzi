var fs = require('fs');
var characters = new Array();

function start(){
	var i=0;
	var lines = new Array();
	
	console.log("Reading in File... Be patient. It may take a while");
	var readFile = fs.readFileSync(__dirname + '/charData.txt', 'utf-8');
	lines = readFile.split(/\r?\n/);
	//console.log(lines.length);
		
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
		/*console.log(character);
		console.log(typeOfDecomposition);
		console.log(components);*/
	};
	
	console.log('Files Read');
};

var decompose = function(character){
	for(var i = 0; i<characters.length; i++){
		if(characters[i][0] == character){
			return(characters[i][2]);
		}
	}
};

exports.start = start;
exports.decompose = decompose;
