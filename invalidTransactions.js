// 1169. Invalid Transactions

// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

// Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

// Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

// Solution 1

var invalidTransactions = function(transactions) {
  let info = [];
  for (let transaction of transactions) {
    let [name, time, amount, city] = transaction.split(',');
    info.push({name, time, amount, city, raw: transaction});
  }
  info.sort((a, b) => Number(a.time) - Number(b.time));
  let invalidTransactionsSet = new Set();
  for (let infoElement of info) {
    if (infoElement.amount > 1000) {
      invalidTransactionsSet.add(infoElement.raw);
    }
  }
  for (let i = 0; i < info.length - 1; i++) {
    let curr = info[i];
    let next = i + 1;
    while (next < info.length && info[next].time - curr.time <= 60) {
      if (curr.name === info[next].name && curr.city !== info[next].city) {
        invalidTransactionsSet.add(curr.raw);
        invalidTransactionsSet.add(info[next].raw);
      }
        next++;
    }
  }
  return Array.from(invalidTransactionsSet);
};

// Solution 2

var invalidTransactions = function(transactions) {
  let map = new Map();
  let invalid = [];
  for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let [name, time, amount, city] = transaction.split(',');
      let numberAmount = Number(amount);
      let numberTime = Number(time);
      let object = {name, time: numberTime, amount: numberAmount, city, wholeStr: transaction, idx: i};
      if (!map.has(name)) map.set(name, []);
      let value = map.get(name);
      value.push(object);
  }
  let idxSet = new Set();
  for (let [key, value] of map) {
      for (let i = 0; i < value.length; i++) {
          let prev = value[i];
          if (prev.amount > 1000 && !idxSet.has(prev.idx)) {
              invalid.push(prev.wholeStr);
              idxSet.add(prev.idx);
          }
          for (let j = i + 1; j < value.length; j++) {
              let current = value[j];
              if (current.amount > 1000 && !idxSet.has(current.idx)) {
              invalid.push(current.wholeStr);
              idxSet.add(current.idx);
          }
              if (prev.city !== current.city && Math.abs(current.time - prev.time) <= 60) {
                  if (!idxSet.has(prev.idx)) {
                      invalid.push(prev.wholeStr);
                      idxSet.add(prev.idx);
                  }
                  if (!idxSet.has(current.idx)) {
                      invalid.push(current.wholeStr);
                      idxSet.add(current.idx);
                  }
              }
          }
      }
  }
  return invalid;
};
