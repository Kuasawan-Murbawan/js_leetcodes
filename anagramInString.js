var anagramInString = function (s, p) {
  /*
        1. create array size 26 filled with zeroes
        2. for each p, subtract 97 ('a') to find the index
        3. then, create the windows
        4. create array 26 size for the windows
        5. join the both the array after each windows >= k
        6. if match, count++

    */

  let ans = [];

  let pCount = new Array(26).fill(0);

  for (let elem of p) {
    pCount[elem.charCodeAt(0) - 97]++;
  }

  let sLength = s.length;
  let k = p.length;

  let windowCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // slides forward
    windowCount[s.charCodeAt(i) - 97]++;

    // remove the earliest left
    if (i >= k) {
      windowCount[s.charCodeAt(i - k) - 97]--;
    }

    // if quorum cukup, find if match anagram
    if (i >= k - 1) {
      if (pCount.join(",") === windowCount.join(",")) {
        // Eg. i is 2, k = 3
        // so if 2 - 3 = -1
        // so need to +1
        ans.push(i - k + 1);
      }
    }
  }

  return ans;
};

let s = "cbaebabacd";
let p = "abc";

console.log(anagramInString(s, p));
