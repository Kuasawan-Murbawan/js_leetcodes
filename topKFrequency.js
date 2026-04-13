/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

*/

// let nums = [1, 1, 1, 2, 2, 3];
let nums = [1, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3];
let k = 2;

var topKFrequency = function (nums, k) {
  /*
        -------- STRATEGY ---------

        1. Put every element in nums with their occurence using hashmap
        2. Convert the hashmap into 2D Array
        3. Sort the array to descreasing order using .sort
        4. Use for loop to get the top K highest frequency
    */

  let map = new Map();

  for (let elem of nums) {
    map.set(elem, (map.get(elem) || 0) + 1);
  }

  let newArr = [...map];

  let sortedArray = newArr.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = [];

  for (let i = 0; i < k; i++) {
    answer.push(sortedArray[i][0]);
  }

  return answer;
};

console.log(topKFrequency(nums, k));
