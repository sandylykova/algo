// Hackerrank Maximum Occurring Character

function maximumOccurringCharacter(text) {
  let charCount = new Map();
  let max = 0;
  for (let char of text) {
      charCount.set(char, charCount.get(char) + 1 || 1);
      max = Math.max(charCount.get(char), max);
  }
  for (let char of text) {
      if (charCount.get(char) === max) return char;
  }
}
