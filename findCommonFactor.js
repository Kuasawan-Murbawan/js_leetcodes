const commonFactors = function (a, b) {
	const minNum = Math.max(Math.sqrt(a), Math.sqrt(b));
	console.log(minNum);
	let ans = [];

	for (let i = 1; i <= minNum; i++) {
		if (a % i === 0 && b % i === 0) {
			ans.push(i);
		}
	}

	/*
    1,2,3,6
    1,2,5,10,20
    */

	return ans;
};

console.log(commonFactors(6, 12));
