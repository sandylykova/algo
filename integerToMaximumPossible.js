function integerToMaximumPossibleWithFive(N) {
  let insertValue = '5';
  let string = N.toString();
  let ans = [];
  if (N >= 0) {
      let i = 0;
      while (string[i] > insertValue) {
          ans.push(string[i]);
          i++;
      }
      ans.push(insertValue);
      let rest = string.slice(i);
      if (rest.length > 0) {
          ans.push(rest);
      }
      let finalValue = ans.join('');
      return String(finalValue);
  } else {
      let i = 1;
      while (string[i] < insertValue) {
          ans.push(string[i]);
          i++;
      }
      let rest = string.slice(i);
      ans.push(insertValue);
      if (rest.length > 0) {
          ans.push(rest);
      }
      let finalValue = ans.join('');
      return String(-finalValue);
  }
}
