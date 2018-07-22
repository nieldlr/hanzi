var data = require('./data');

var table = {};

function start() {
  console.log('Hanzi is loading wuki keys map...');

  var readFile = data.loadWubi();
  var lines = readFile.split('\n');
  table = get_table(lines);
}

function get_table(lines) {
  var result = {};

  var i = 0;

  // Skip first lines
  while (true) {
    if (lines[i] === 'BEGIN_TABLE') {
      i += 1;
      break;
    }
    i += 1;
  }

  while (true) {
    if (lines[i] === 'END_TABLE') {
      break;
    } else {
      [wubi, hanzi, rest] = lines[i].split('\t');
      result[hanzi] = wubi;
    }
    i += 1;
  }

  return result;
}

function getWubi(hanzi) {
  if (table[hanzi] !== undefined) {
    return table[hanzi];
  } else {
    return hanzi
      .split('')
      .map(x => table[x])
      .join(' ');
  }
}

exports.start = start;
exports.getWubi = getWubi;
