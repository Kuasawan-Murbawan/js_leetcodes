// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var nums = [2, 7, 11, 15];
var target = 6;

var twoSum = function (nums, target) {
  // check if the input is empty
  if (nums.length === 0 || target == null) {
    return "input error";
  }

  // create a hashmap to store the nums value
  let numList = new Map();

  for (let i = 0; i < nums.length; i++) {
    // store value and its index
    // [2 : 0]
    // [7 : 1]
    // [11 : 2]
    // [15 : 3]
    numList.set(nums[i], i);
  }

  for (let j = 0; j < nums.length; j++) {
    // check the complement to compare with the map
    let complement = target - nums[j];

    // if there is match, return the index of current element and the index of complement found
    if (numList.has(complement) && numList.get(complement) !== j) {
      return [j, numList.get(complement)];
    }
  }

  return "no solution";
};

console.log(twoSum(nums, target));
