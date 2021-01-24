// 557. Reverse Words in a String III

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
  let arr = s.split(' ');
  let ans = [];
  for (let word of arr) {
      let reversed = getReversed(word);
      ans.push(reversed);
  }
  return ans.join(' ');
};

function getReversed(word) {
  word = word.split('');
  let l = 0;
  let r = word.length - 1;
  while (l < r) {
      let temp = word[l];
      word[l] = word[r];
      word[r] = temp;
      l++;
      r--;
  }
  return word.join('');
}
