// You are given two integer arrays `nums1` and `nums2`, and two integers `m` and `n`,
// representing the number of elements in `nums1` and `nums2` respectively.
// the 2 arrays (all elements in in the array is in increasing order)
// you also can only modify the num1 array

var arr1 = [1, 2, 3, 0, 0, 0];
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

console.log(mergeSort(arr1, arr2, m, n));
