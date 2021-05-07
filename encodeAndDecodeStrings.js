// 271. Encode and Decode Strings

// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector<string> strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:
// vector<string> decode(string s) {
//   //... your code
//   return strs;
// }
// So Machine 1 does:

// string encoded_string = encode(strs);
// and Machine 2 does:

// vector<string> strs2 = decode(encoded_string);
// strs2 in Machine 2 should be the same as strs in Machine 1.

// Implement the encode and decode methods.

// Input: dummy_input = ["Hello","World"]
// Output: ["Hello","World"]
// Explanation:
// Machine 1:
// Codec encoder = new Codec();
// String msg = encoder.encode(strs);
// Machine 1 ---msg---> Machine 2

// Machine 2:
// Codec decoder = new Codec();
// String[] strs = decoder.decode(msg);

// Solution 1

var encode = function(strs) {
  let encoded = [];
  let delimeter = '#';
  for (let str of strs) {
      let len = str.length;
      let value = `${len}${delimeter}${str}`;
      encoded.push(value);
  }
  let encodedStr = encoded.join('');
  return encodedStr;
};

/**
* Decodes a single string to a list of strings.
*/
var decode = function(s) {
  let i = 0;
  let decoded = [];
  while (i < s.length) {
      let len = '';
      let j = i;
      while (s[j] !== '#') {
          len += s[j];
          j++;
      }
      len = Number(len);
      let lenOfLen = j - i;
      let str = s.slice(i + lenOfLen + 1, i + lenOfLen + 1 + len);
      decoded.push(str);
      i += len + lenOfLen + 1;
  }
  return decoded;
};
