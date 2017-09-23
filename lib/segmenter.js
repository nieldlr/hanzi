var LongestMatchSegmenter;

LongestMatchSegmenter = (function() {
  function LongestMatchSegmenter(dict) {
    // dict should be a function that takes a chinese string as the
    // first param and returns something falsey if item is not in dict
    this.dict = dict;
  }

  LongestMatchSegmenter.prototype.getLongestMatch = function(input_str) {
    var i, max_word_len, slice;
    max_word_len = 8;
    i = max_word_len > input_str.length ? max_word_len : input_str.length;
    while (i >= 0) {
      slice = input_str.substr(0, i);
      if (this.dict(slice)) {
        return slice;
      }
      i--;
    }
    // no match found, return undefined
    return undefined;
  };

  LongestMatchSegmenter.prototype.segment = function(input_str) {
    var seg, segments;
    segments = [];
    // loop through the input_str, slicing off each longestMatch and
    // appending it to the segments array
    while (input_str.length > 0) {
      seg = this.getLongestMatch(input_str);
      if (!seg) {
        seg = input_str.substr(0, 1);
      }
      input_str = input_str.slice(seg.length);
      segments.push(seg);
    }
    return segments;
  };

  return LongestMatchSegmenter;
})();

exports.LongestMatchSegmenter = LongestMatchSegmenter;
