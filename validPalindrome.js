// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Input: "A man, a plan, a canal: Panama"
// Output: true

var isPalindrome = function(s) {
  s = s.toLowerCase();
  var start = 0;
  var end = s.length - 1;
  while (start < end) {
      var left = s.charCodeAt(start);
      var right = s.charCodeAt(end);

      if (!isLetter(left)) {
          start++;
          continue;
      }
      if (!isLetter(right)) {
          end--;
          continue;
      }

      if (s[start] !== s[end]) {
          return false ;
      }
      start++;
      end--;
}
return true;
};

var isLetter = function(code) {
  if (((code >= 48) && (code <= 57))  // numbers
  || ((code >= 97) && (code <= 122))) {  // lowercase
      return true;
  }
  return false;
};
