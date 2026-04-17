//Given a string s, return true if it is a palindrome, or false otherwise.

// var str = "amanaplanacanalpanamA";
var str = "A man, a plan, a canal: Panama";

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

var isPalindrome2 = function (s) {
  let lowerCase = s.toLowerCase();
  let arr = lowerCase.split("");
  let filteredArr = arr.filter(
    (char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9"),
  );

  let finalStr = filteredArr.join("");

  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    if (s[p1] !== s[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};

console.log(isPalindrome2(str));
