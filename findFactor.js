// same as prime number, we need to only find until the sqrt of num
const findFactors = function (nums) {
	const maxNum = Math.sqrt(nums);
	let ans = new Set();

	for (let i = 1; i <= maxNum; i++) {
		if (nums % i === 0) {
			ans.add(i);
			ans.add(nums / i);
		}
	}

	// return ans;

	return new Promise((resolve, reject) => {
		if (ans.size !== 0) {
			resolve(ans);
		} else {
			reject("no factors found");
		}
	});
};

const findCommon = function (a, b) {
	let ans = [];
	if (a.size > b.size) {
		for (let elem of b) {
			if (a.has(elem)) {
				ans.push(elem);
			}
		}
	} else {
		for (let elem of a) {
			if (b.has(elem)) {
				ans.push(elem);
			}
		}
	}

	return new Promise((resolve, reject) => {
		if (ans.length !== 0) {
			resolve(ans);
		} else {
			reject("No common");
		}
	});
};

// 1. Use single chain promise
// findFactors(6)
// 	.then((factorsFound) => {
// 		factorA = factorsFound;
// 		console.log("Factors A= ", factorA);
// 		return findFactors(12);
// 	})
// 	.then((factorsBfound) => {
// 		factorB = factorsBfound;
// 		console.log("Factors B= ", factorB);
// 		return findCommon(factorA, factorB);
// 	})
// 	.then((answer) => {
// 		console.log("Common are: ", answer);
// 	})
// 	.catch((error) => {
// 		console.log("No factors found");
// 	})
// 	.finally(() => {
// 		console.log("sekian terima kasih");
// 	});

// 2. Use promise.all

Promise.all([findFactors(6), findFactors(12)])
	.then(([factorA, factorB]) => {
		console.log("Factors A: ", factorA);
		console.log("Factors B: ", factorB);

		return findCommon(factorA, factorB);
	})
	.then((answers) => {
		console.log(answers);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("Sekian terima kasih");
	});
