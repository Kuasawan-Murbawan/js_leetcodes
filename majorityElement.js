// Given an array `nums` of size `n`, return *the majority element*.
// The majority element is the element that appears more than `⌊n / 2⌋` times.
// You may assume that the majority element always exists in the array.
// Eg → [1,2,3,1,1,2,2,2], return → 2
// Majority is when the element occurs more than half the time, it is not the highest number of occurence

// var arr = [6, 6, 8, 8, 8, 8, 8, 22, 12];
// var arr = [6, 8, 8, 8, 80, 6, 6, 80];
// var arr = [2, 2, 1, 1, 1, 2, 2];
var arr = [3, 2, 3];

var calculateMajority = function (nums) {
  // store each key with the number of occurences
  var occ = new Map();

  for (let num of nums) {
    if (occ.has(num)) {
      occ.set(num, occ.get(num) + 1);
    } else {
      occ.set(num, 1);
    }
  }

  var maxOcc = 0;
  var maxKey = null;

  // compare each number of occurences to find the max entries
  for (let [key, value] of occ.entries()) {
    if (value > maxOcc) {
      maxOcc = value;
      maxKey = key;
    }
  }
  return maxKey;
};

var calculateMajority2 = function (nums) {
  // the majority elements will always have more occurence than other elements
  // so we just plus minus the occurences
  var maxKey = nums[0];
  var occurence = 1;

  for (let i = 1; i < nums.length; i++) {
    if (occurence === 0) {
      maxKey = nums[i];
    }

    if (nums[i] === maxKey) {
      occurence++;
    } else {
      occurence--;
    }
  }

  return maxKey;
};

var calculateMajorityHashmap = function (nums) {
  /*
    1. Iterate each element and store it a map
    2. count each occurence
    3. If the occurence is more than size, then return the element
*/

  let map1 = new Map();
  let numSize = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (map1.has(nums[i])) {
      let nextCount = map1.get(nums[i]) + 1;

      if (nextCount > numSize / 2) {
        return nums[i];
      }

      map1.set(nums[i], nextCount);
    } else {
      map1.set(nums[i], 1);
    }
  }
};

console.log(calculateMajorityHashmap(arr));
