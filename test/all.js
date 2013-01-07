var assert = require("assert");
var hanzi = require("../index.js");
hanzi.start();

describe('hanzidecomposer', function(){
	it('checks if component exists', function() {
		assert(hanzi.ifComponentExists('爱'));
	});

	it('detects invalid input', function() {
		assert.equal(hanzi.decompose('a'), 'Invalid Input');
	});

	it('should once decompose simplified character', function(){
		assert.deepEqual(hanzi.decompose('爱').components1, ['No glyph available', '友']);
	});
	it('should radical decompose simplified character', function(){
		assert.deepEqual(hanzi.decompose('爱').components2, ['爫', '冖', '𠂇', '又']);
	});
	it('should graphical decompose simplified character', function(){
		assert.deepEqual(hanzi.decompose('爱').components3, ['爫', '冖', '𠂇', '㇇', '㇏']);
	});

	it('should once decompose traditional character', function(){
		assert.deepEqual(hanzi.decompose('愛').components1, ['No glyph available','夂']);
	});
	it('should radical decompose traditional character', function(){
		assert.deepEqual(hanzi.decompose('愛').components2, ['爫','冖','心','夂']);
	});
	it('should graphical decompose traditional character', function(){
		assert.deepEqual(hanzi.decompose('愛').components3, ['爫','冖','𠁼','㇃','㇇','㇏','㇒']);
	});
});