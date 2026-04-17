/*
    Basically like twosum, but you can only use constant space O(1). 
    So cant use hashmap becuase its O(n)

    =========  Stratergy =========
    1. Left = 0;
    2. Right = nums.length-1
    3. While (left<right){
        sum = nums[left]  + nums[right]
        if(sum == target){
        reutrn [left+1, right+!]
        }e
        }

*/
var twoSumII = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum == target) {
      return [++left, ++right];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSumII(nums, target));
