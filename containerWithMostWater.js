/*
    ==== Find the max area with the most water ===

     Things to consider
     - the height of left n right
     - the distance between left n right

    To store
    - BiggestSoFar    

    1. Start from left[0], right[maxlength]    
    2. size = Math.min(heigh[left], height[right]) * (right-left)
    while(left < right)
    3. if(size > BiggestSofar)
    4.  BiggestSoFar = (size)
    6. else if(size < biggestSofar)
    7.  if(height[left] < height[right])
            left++;
        else
            right++
    8.  
    


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
