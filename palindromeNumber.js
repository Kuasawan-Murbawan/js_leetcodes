// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left

var x = -121;

var isPalindrome = function (num) {
	if (num < 0) return "x is not pal";

	let digit,
		reversed = 0;
	let temp = x;

	while (temp !== 0) {
		digit = temp % 10;
		reversed = reversed * 10 + digit;
		temp = Math.floor(temp / 10);
	}

	return x === reversed ? true : false;
};

// console.log(isPalindrome(x));

/*  1. Reverse the number
    2. get the last number
    3. put it in front
    4. 

*/

const palindromNum = function (num) {
	let reversed = 0;
	let digit = 0;

	let temp = num;

	while (temp > 0) {
		digit = temp % 10;
		reversed = reversed * 10 + digit;
		temp = Math.floor(temp / 10);
	}

	return reversed === num;
};

console.log(palindromNum(246342));
