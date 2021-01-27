// 443. String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// Solution 1 O(n^2) time | O(1) space

var compress = function(chars) {
  let start = 0;
  let end = 0;
  while (end < chars.length) {
      if (chars[end] === chars[end + 1]) {
          end++;
      } else {
          let len = end - start + 1;
          if (len === 1) {
              start++;
              end++;
              continue;
          } else {
              chars.splice(start + 1, len - 1, ...len.toString().split(''));
              end -= len - 1 - len.toString().length;
              start = end;
              start++;
              end++;
          }
      }
  }
  return chars.length;
};
