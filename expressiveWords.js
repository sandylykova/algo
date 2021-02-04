// 809. Expressive Words

// Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

// For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

// For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.

// Given a list of query words, return the number of words that are stretchy.

// Input:
// S = "heeellooo"
// words = ["hello", "hi", "helo"]
// Output: 1
// Explanation:
// We can extend "e" and "o" in the word "hello" to get "heeellooo".
// We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

// Solution 1

var expressiveWords = function(S, words) {
  const isExpressive = (word) => {
      let wI = 0;
      let sI = 0;

      while (wI < word.length || sI < S.length) {
          let countW = 1;
          let countS = 1;
          if (word[wI] !== S[sI]) return false;

          while (word[wI] === word[wI + 1]) {
              wI++;
              countW++;
          }
          while (S[sI] === S[sI + 1]) {
              sI++;
              countS++;
          }
          wI++;
          sI++;
          if (countS < countW || (countS !== countW && countS < 3)) return false;
      }


      return true;
  };

  return words.filter(isExpressive).length;
};
