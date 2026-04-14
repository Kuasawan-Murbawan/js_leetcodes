// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k.

var arr = [1, 2, 3, 5, 1, 1];
var k = 3;

// O(n^2) - nested loop
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

// O(n) - sekali harung as the nums size increase
var containsNearbyDuplicate2 = function (nums, k) {
  /*
    1. Iterate each element using for loop
    2. Store the element with their index in a map
    3. In next iteration, check if there exist the same element in the map
    4. If it have, check if the current index and the last seen index is less than k
    5. If no, ignore
    6. If yes, return true
    7. Update the map to put the latest index
  */

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];

    if (map.has(currentElement)) {
      let lastSeenIndex = map.get(currentElement);
      if (i - lastSeenIndex <= k) {
        return true;
      }
    }

    map.set(currentElement, i);
  }

  return false;
};

console.log(containsNearbyDuplicate2(arr, k));
