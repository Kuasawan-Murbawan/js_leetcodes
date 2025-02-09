// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Input: nums = [0,0,1,1,1,2,2,3,3,4]

var arr = [1, 1, 2];

var removeDuplicate = function (nums) {
  let unique = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return nums;
};

console.log(removeDuplicate(arr));
