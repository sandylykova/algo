// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Solution 1

var productExceptSelf = function(nums) {
    let finalArr = [];
    for (let i = 0; i < nums.length; i++) {
        let sum = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue;
            sum *= nums[j];
        }
        finalArr.push(sum);
    }
    return finalArr;
};

// Solution 2

var productExceptSelf = function(nums) {
    let arr = [];
    let total = 1;
    let zeros = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
            continue;
        }
        total *= nums[i];
    }
    if (zeros > 1) {
        for (let i = 0; i < nums.length; i++) {
            arr[i] = 0;
        }
    }
    if (zeros === 1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) arr[i] = total;
            else arr[i] = 0;
        }
    }
    if (zeros === 0)   {
        for (let i = 0; i < nums.length; i++) {
            let localTotal = total;
            arr[i] = localTotal / nums[i];
        }
    }
    return arr;
};

// Solution 3

var productExceptSelf = function(nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i=nums.length - 1; i >= 0; i--) {
      output[i] = rightMult;
      rightMult *= nums[i];
  }
  for (var j=0; j < nums.length; j++) {
      output[j] *= leftMult;
      leftMult *= nums[j];
  }
  return output;
};
