// Paramenters:

// array of currency conversion rates. E.g. ['USD', 'GBP', 0.77] which means 1 USD is equal to 0.77 GBP
// an array containing a 'from' currency and a 'to' currency
// Given the above parameters, find the conversion rate that maps to the 'from' currency to the 'to' currency.
// Your return value should be a number.

// Example:
// You are given the following parameters:

// Rates: ['USD', 'JPY', 110] ['USD', 'AUD', 1.45] ['JPY', 'GBP', 0.0070]
// To/From currency ['GBP', 'AUD']
// Find the rate for the 'To/From' curency. In this case, the correct result is 1.89.

// Solution 1

function currencyConversion(rates, fromTo) {
  let adjList = new Map();
  for (let rate of rates) {
    if (!adjList.has(rate[0])) adjList.set(rate[0], []);
    if (!adjList.has(rate[1])) adjList.set(rate[1], []);
  }
  for (let rate of rates) {
    adjList.get(rate[0]).push([rate[1], rate[2]]);
    adjList.get(rate[1]).push([rate[0], 1 / rate[2]]);
  }
  let ans = -1;
  let visited = new Set();
  let stack = [[fromTo[0], 1]];
  visited.add(fromTo[0]);
  while (stack.length > 0) {
    let [curr, val] = stack.pop();
    let values = adjList.get(curr);
    if (curr === fromTo[1]) {
      ans = val;
      break;
    }
    for (let i = 0; i < values.length; i++) {
      let node = values[i];
        if (visited.has(node)) continue;
        visited.add(node);
        stack.push([node[0], val * node[1]]);
    }
  }
  return ans;
}
