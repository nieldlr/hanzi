const assert = require('assert');
const hanzi = require('../index.js');

hanzi.start();

describe('wubidictionary', function() {
  it("gets a character's wubi key sequence", function() {
    assert.deepEqual(hanzi.getWubi('的'), 'rqyy');
  });

  it("gets characters's wubi key sequences", function() {
    assert.deepEqual(hanzi.getWubi('你华'), 'wqiy wxfj');
  });

  it('gets simplified wubi for frequent hanzi combination', function() {
    assert.deepEqual(hanzi.getWubi('你好'), 'wqvb');
  });
});
