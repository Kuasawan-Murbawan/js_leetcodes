// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

//Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

var arr = [3, 2, 5, 3, 7, 2, 2, 3];
var target = 3;

var removeEl = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    // if the element is not the same, put that element in the count
    if (nums[i] !== target) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

console.log(removeEl(arr, target));
