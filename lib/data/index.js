function loadCCEDICT() {
  return require('./cedict_ts.u8');
}

function loadCharacterFrequency() {
  return require('./charfreq.txt');
}

function loadCJK() {
  return require('./cjk-decomp.txt');
}

function loadIrregularPhonetics() {
  return require('./irregularphonetics.txt');
}

function loadJunda() {
  return require('./frequencyjunda.txt');
}

function loadWordFrequency() {
  return require('./wordfreq.txt');
}

exports.loadCCEDICT = loadCCEDICT;
exports.loadCharacterFrequency = loadCharacterFrequency;
exports.loadCJK = loadCJK;
exports.loadIrregularPhonetics = loadIrregularPhonetics;
exports.loadJunda = loadJunda;
exports.loadWordFrequency = loadWordFrequency;
