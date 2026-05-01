var moveZeroes = function (nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[lastNonZero];
      nums[lastNonZero] = nums[i];
      nums[i] = temp;
      lastNonZero++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 2, 0, 3]));
