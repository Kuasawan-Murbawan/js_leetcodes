nums = [100, 4, 200, 1, 3, 2];

var longestConsecutiveSequence = function (nums) {
  if (nums.length == 0) return 0;

  nums.sort((a, b) => {
    return a - b;
  });

  let longestSeq = 1;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    // skip duplicate
    if (nums[i] === nums[i + 1]) {
      continue;
    }

    if (nums[i] + 1 === nums[i + 1]) {
      count++;
    } else {
      longestSeq = Math.max(longestSeq, count);
      count = 1;
    }
  }

  return Math.max(longestSeq, count);
};

console.log(longestConsecutiveSequence(nums));
