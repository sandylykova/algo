// 482. License Key Formatting

// You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

// Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

// Given a non-empty string S and a number K, format the string according to the rules described above.

// Input: S = "5F3Z-2e-9-w", K = 4

// Output: "5F3Z-2E9W"

// Explanation: The string S has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Solution 1

var licenseKeyFormatting = function(S, K) {
    S = S.toUpperCase();
    let numberOfChar = 0;
    for (let char of S) {
        if (char !== '-') numberOfChar++;
    }
    let firstPartLength = numberOfChar % K;
    let result = [];
    let i = 0;
    while (i < S.length) {
        let first = '';
        while (firstPartLength > i) {
            if (S[i] === '-') {
                i++;
                firstPartLength++;
                continue;
            }
            first += S[i];
            i++;
        }
        if (first.length) result.push(first);
        let counter = 0;
        let res = '';
        while (counter < K && i < S.length) {
            if (S[i] === '-') {
                i++;
                continue;
            }
            res += S[i];
            counter++;
            i++;
        }
        if (res.length) result.push(res);
    }
    let final = result.join('-');
    return final;
};

// Solution 2

var licenseKeyFormatting = function(S, K) {
  S = S.split("-").join('').split('');
  for (let i = S.length - K - 1; i >= 0; i -= K) {
      S[i] += "-";
  }
  return S.join('').toUpperCase();
};
