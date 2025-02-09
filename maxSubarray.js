// Find the biggest subarray and return its sum

var arr = [1, -4, 1, 2];

var maxSub = function (nums) {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum <= 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};

console.log(maxSub(arr));
