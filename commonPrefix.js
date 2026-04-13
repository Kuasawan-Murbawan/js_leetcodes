// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var strs = ["flowars", "flow", "floywa"];

var longestCommonPre = function (strs) {
  strs.sort(); // this will sort the array strings alphabetically
  // so, we can only compare the first and last element
  strs = strs.sort();
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];
  let commonString = "";

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonString += firstStr[i];
    } else {
      break;
    }
  }

  return commonString;
};

console.log(longestCommonPre(strs));
