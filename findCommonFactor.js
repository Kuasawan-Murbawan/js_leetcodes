const commonFactors = function (a, b) {
	const minNum = Math.max(a, b);
	const minSqrt = Math.sqrt(minNum);
	console.log(minSqrt);
	let ans = [];

	for (let i = 1; i <= minSqrt; i++) {
		if (a % i === 0 && b % i === 0) {
			ans.push(i);

			const partner = minNum / i;
			console.log("i: " + i + "\np: " + partner);
			if (i != partner && a % partner == 0 && b % partner === 0) {
				ans.push(partner);
			}
		}
	}

	/*
    1 x 12
    2 x 6
    3 x 4


    1 x 36
    2 x 18
    3 x 12
    4 x 9
    6 x 6 
    */

	return ans;
};

// console.log(commonFactors(850, 442));

/*  for 442:    1 x 442
                2 x 221
                13 x 34
                17 x 26     


    for 850:    1 x 850
                2 x 425
                5 x 170
                10 x 85
                17 x 50
                25 x 34



*/

const gcd = function (a, b) {
	let maxNum = Math.max(a, b);
	let minNum = Math.min(a, b);

	let total = maxNum / minNum;
	let secondNum = minNum;

	while (total > 0) {
		if (secondNum % total === 0) {
			let temp = total;
			total = secondNum / total;
			secondNum = temp;
			console.log(total);
		}
	}

	console.log(total);
};

console.log(gcd(442, 850));
