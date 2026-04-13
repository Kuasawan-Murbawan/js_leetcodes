// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such  that they add up to target.
var arr = [2, 7, 11, 15];
var target = 17;

// use hashmap to have O(n)

var twosum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];

    if (map.has(complement) && map.has(complement) !== nums[j]) {
      return [j, map.get(complement)];
    }
  }
};

// console.log(twosum(arr, target));

// 2. Palindrome Number
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var arr2 = 1221;

var isPalindrome = function (num) {
  // use remainder

  let reversed = 0;
  let digit = 0;
  let temp = num;

  while (temp > 0) {
    digit = temp % 10;
    temp = Math.floor(temp / 10);
    reversed = reversed * 10 + digit;
  }

  return reversed == num;
};

console.log(isPalindrome(arr2));
