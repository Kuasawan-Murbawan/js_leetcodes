// Given an array `nums` of size `n`, return *the majority element*.
// The majority element is the element that appears more than `⌊n / 2⌋` times.
// You may assume that the majority element always exists in the array.
// Eg → [1,2,3,1,1,2,2,2], return → 2

var arr = [6, 6, 8, 8, 8, 8, 9, 12, 22, 12];
// var arr = [6, 8, 8, 8, 80, 6, 6, 80];

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

console.log(calculateMajority2(arr));
