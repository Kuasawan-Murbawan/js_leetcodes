//Given a string s, return true if it is a palindrome, or false otherwise.

var str = "amanaplanacanalpanamA";

var isPalindrome = function (str) {
  cleanedStr = str.toLowerCase();

  // use pointers

  let left = 0;
  let right = str.length - 1;

  // while the left pointer doesnt reach right pointer, keep  looping
  while (left < right) {
    if (cleanedStr[left] != cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome(str));
