class LongestMatchSegmenter
  constructor: (dict) ->
    # dict should be a function that takes a chinese string as the
    # first param and returns something falsey if item is not in dict
    @dict = dict

  getLongestMatch: (input_str) ->
    max_word_len = 8
    i = (if max_word_len > input_str.length then max_word_len else input_str.length)
    while i >= 0
      slice = input_str.substr(0, i)
      return slice  if @dict(slice)
      i--

    # no match found, return undefined
    return undefined

  segment: (input_str) ->
    segments = []

    # then use dict to do a longest match segment each member of strings into segments array
    while input_str.length > 0
      seg = @getLongestMatch(input_str)
      #if no match, just push one chr
      seg = input_str.substr(0, 1) if not seg
      input_str = input_str.slice(seg.length)
      segments.push seg
    return segments

exports.LongestMatchSegmenter = LongestMatchSegmenter
