/*
    ==== Find the max area with the most water ===

     Things to consider
     - the height of left n right
     - the distance between left n right



*/

var containerWithMostWater = function (heights) {
  let left = 0;
  let right = heights.length - 1;

  let maxArea = 0;

  while (left < right) {
    let currentArea = Math.min(heights[left], heights[right]) * (right - left);

    maxArea = Math.max(currentArea, maxArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(containerWithMostWater(heights));
