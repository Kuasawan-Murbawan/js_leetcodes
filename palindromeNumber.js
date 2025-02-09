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

console.log(isPalindrome(x));
