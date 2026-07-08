// ========== PRIME NUMBERS =========
// Numbers that can only be divided by 1 and its own number
// - to find prime number, we need to know how to get factors of a number
// eg: 20 factors = 1 x 20
//                  2 x 10
//                  4 x 5
// we can see that 1,2,4 then it will go 5, 10,20.
// the middle that is not repeated is 4, so we only need to divide from 1 until 4 (use loop)
// if num%1,2,3,4 === 0, then we store 1 & the result
// but for prime numbers, we only take note if there are any number that is divisible other than 1 and its own numebr
// to get the middle, we can use square root

const isPrime = function (num) {
	if (num <= 1) return false;

	const maxNum = Math.sqrt(num);

	for (let i = 2; i <= maxNum; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
};

console.log(isPrime(7));
