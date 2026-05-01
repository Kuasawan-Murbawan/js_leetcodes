// You are given two integer arrays `nums1` and `nums2`, and two integers `m` and `n`,
// representing the number of elements in `nums1` and `nums2` respectively.
// the 2 arrays (all elements in in the array is in increasing order)
// you also can only modify the num1 array

var arr1 = [1, 2, 93, 0, 0, 0];
var m = 3;
var arr2 = [2, 5, 6];
var n = 3;

var mergeSort = function (nums1, nums2, m, n) {
  // work from the back
  let i = m + n - 1; // the end of nums1 element
  lastNums1 = m - 1;
  lastNums2 = n - 1;

  while (lastNums2 >= 0) {
    // if the last element of nums1 is greater, put it at the back
    if (nums1[lastNums1] > nums2[lastNums2]) {
      nums1[i] = nums1[lastNums1];
      lastNums1--;
    } else {
      nums1[i] = nums2[lastNums2];
      lastNums2--;
    }
    i--;
  }

  return nums1;
};

var merge = function (nums1, m, nums2, n) {
  let biggest1 = m - 1;
  let biggest2 = n - 1;

  let currentIndex = nums1.length - 1;

  while (biggest2 >= 0) {
    if (biggest1 >= 0 && nums1[biggest1] > nums2[biggest2]) {
      nums1[currentIndex] = nums1[biggest1];
      biggest1--;
    } else {
      nums1[currentIndex] = nums2[biggest2];
      biggest2--;
    }

    currentIndex--;
  }

  return nums1;
};

console.log(merge(arr1, m, arr2, n));
