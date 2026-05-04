/*
Given an integer array nums, return all the triplets 

the sum of all triplet must equal 0

Notice that the solution set must not contain duplicate triplets.

1. find the triplet
2. anchor 1, squeeze next
3. implement safeguard on anchor
4. implement safeguard on squeeze
5. safeguard -> becuase we sorted the array, we can just skip group of duplicated number

*/

var threeSum = function (nums) {
  let sortedArr = nums.sort((a, b) => {
    return a - b;
  });

  let ans = [];

  for (let i = 0; i < sortedArr.length; i++) {
    // we need to find the pairs that make nums[i] == 0
    // so if we already find it, we need to skip it
    // because this is sorted array, all the same numbers will be grouped together

    if (i > 0) {
      if (nums[i] == nums[i - 1]) {
        continue;
      }
    }

    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // if left or right is identical, skip them
        // we put it after they found sum == 0 so that it doesnt have to loop BEFORE it finds 0
        while (left < right && nums[left] == nums[left - 1]) {
          left++; // skip to the next element
        }

        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return ans;
};

let nums = [-1, 0, 1, 2, -1, -4];
let nums2 = [-2, 0, 1, 1, 2];
console.log(threeSum(nums2));
