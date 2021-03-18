// Hackerrank Picking Tickets

function maxTickets(tickets) {
  let counterMap = new Map();
  let maxLength = 0;
  for (let ticket of tickets) {
      counterMap.set(ticket, counterMap.get(ticket) + 1 || 1);
  }
  let used = new Set();
  for (let [key, value] of counterMap) {
      let currentKey = key;
      if (!counterMap.has(currentKey - 1)) {
          if (counterMap.has(currentKey + 1)) used.add(key);
          let innerCounter = counterMap.get(currentKey);
          while (counterMap.has(++currentKey)) {
              used.add(currentKey);
              innerCounter += counterMap.get(currentKey);
          }
          maxLength = Math.max(maxLength, innerCounter);
      }
      if (value > 1 && !used.has(key)) {
          maxLength = Math.max(maxLength, value);
      }
  }
  return maxLength;
}
