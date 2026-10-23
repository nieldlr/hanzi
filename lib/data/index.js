function loadCCEDICT() {
  return require('./cedict_ts.u8');
}

function loadCJK() {
  return require('./cjk-decomp.txt');
}

function loadFrequencyWithScriptVariantsRemoved() {
  return require('./frequency_with_script_variants_removed.txt');
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
exports.loadCJK = loadCJK;
exports.loadFrequencyWithScriptVariantsRemoved = loadFrequencyWithScriptVariantsRemoved;
exports.loadIrregularPhonetics = loadIrregularPhonetics;
exports.loadJunda = loadJunda;
exports.loadWordFrequency = loadWordFrequency;
