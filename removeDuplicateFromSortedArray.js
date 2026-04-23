var remove = function (nums) {
  if (nums.length === 0) return 0;

  let anchor = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[anchor] != nums[i]) {
      anchor++;
      nums[anchor] = nums[i];
    }
  }

  return anchor + 1;
};

let arr = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(remove(arr));
