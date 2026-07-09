const biggestNum = function (nums) {
	let max = -Infinity;

	for (let elem of nums) {
		max = Math.max(elem, max);
	}
	return max;
};

console.log(biggestNum([1, 6, 4, 2, 5, 9, 6, 3, 5]));
