var solution = function (nums, k, threshold) {
  let targetSum = threshold * k;

  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= k) {
      sum -= nums[i - k];
    }

    if (i >= k - 1) {
      // if reached k size and -1 bc index 3 is size 4
      if (sum >= targetSum) {
        count++;
      }
    }
  }

  return count;
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8];
let k = 3;
let threshold = 4;

console.log(solution(arr, k, threshold));
