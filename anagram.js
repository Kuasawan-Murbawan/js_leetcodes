/*
Given two strings string1 and string2, return true if string1 is an anagram of string2, and false otherwise.

1. Store each string1 letter inside store1 Hashmap keys
2. Also include the count of each letter as the values
3. Iterate each letter in string2
4. If there is a match with store1,
5. Delete 1 from the count
6. After deletion, when the count is 0, delete the key
7. If no match, return false
8. Only if store1 is empty we can return true


*/

var isAnagram = function (string1, string2) {
  let store1 = new Map();

  for (let i = 0; i < string1.length; i++) {
    if (store1.has(string1[i])) {
      let currentCount = store1.get(string1[i]);
      store1.set(string1[i], currentCount + 1);
    } else {
      store1.set(string1[i], 1);
    }
  }

  for (let j = 0; j < string2.length; j++) {
    if (store1.has(string2[j])) {
      let firstCurrentCount = store1.get(string2[j]);
      store1.set(string2[j], firstCurrentCount - 1);

      let secondCurrentCount = store1.get(string2[j]);
      if (secondCurrentCount === 0) {
        store1.delete(string2[j]);
      }
    } else {
      return false;
    }
  }

  return store1.size === 0;
};

console.log(isAnagram("anagram", "nagaaram"));
