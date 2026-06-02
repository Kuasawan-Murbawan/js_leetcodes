var minSize = function (target, nums) {
  let anchor = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      let length = right - anchor + 1;
      minLen = Math.min(length, minLen);
      sum -= nums[anchor];
      anchor++;
    }
  }

  return minLen == Infinity ? 0 : minLen;
};

console.log(minSize(7, [2, 3, 1, 2, 4, 3]));
