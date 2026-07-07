// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Then return the number of unique elements in nums.

// Input: nums = [1,1,2]
// Input: nums = [0,0,1,1,1,2,2,3,3,4]

var arr = [1, 1, 2, 2, 2, 2, 2, 3, 4, 5];

var removeDuplicate = function (nums) {
	let anchor = 0;

	for (let explorer = 1; explorer < nums.length; explorer++) {
		if (nums[anchor] !== nums[explorer]) {
			anchor++;
			nums[anchor] = nums[explorer];
		}
	}

	return nums.slice(0, anchor + 1);
};

console.log(removeDuplicate(arr));
