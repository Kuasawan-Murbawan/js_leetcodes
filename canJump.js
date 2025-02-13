var arr = [3, 2, 1, 0, 4];
var arr = [2, 3, 1, 1, 4];

var canJump = function (nums) {
  let lastIndex = nums.length - 1;
  let maxReach = 0;

  for (let i = 0; i <= lastIndex; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= lastIndex) {
      console.log("maxReach: ", maxReach);
      return true;
    }
  }
  return false;
};

console.log(canJump(arr));
