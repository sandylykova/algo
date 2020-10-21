// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Solution 1 naive approach

var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          arr.push("FizzBuzz");
      } else if (i % 3 === 0) {
          arr.push("Fizz");
      } else if (i % 5 === 0) {
          arr.push("Buzz");
      } else {
          let str = String(i);
          arr.push(str);
      }
  }
  return arr;
};

// Solution 2

var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      str += "Buzz";
    }
    if (str.length === 0) {
      str += i;
    }
    arr.push(str);
  }
  return arr;
};

// Solution 3

var fizzBuzz = function(n) {
  let result = [];
  let mappings = {
    3: 'Fizz',
    5: 'Buzz'
  };
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let key in mappings) {
      if (i % parseInt(key, 10) === 0) {
        str += mappings[key];
      }
    }
    if (str.length === 0) {
      str += i;
    }
    result.push(str);
  }
  return result;
};
