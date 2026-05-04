var maxAvgSubarray = function (nums, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let sum = maxSum;

  // this is the explorer (right pointer)
  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k]; // this is the left pointer
    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

console.log(maxAvgSubarrayDRY([1, 12, -5, -6, 50, 3], 4));
