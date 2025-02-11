// Given two strings ransomNote and magazine,
// return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

var ransomNote = "ab4a9g";
var magazine = "bagyuo98a";

var canConstruct = function (ransomNote, magazine) {
  // create a hashmap to store characters in magazine
  var magMap = new Map();

  for (let char of magazine) {
    if (magMap.has(char)) {
      // if the character exist, we add the number of occurence
      magMap.set(char, magMap.get(char) + 1);
    } else {
      // if not exist, create new one
      magMap.set(char, 1);
    }
  }

  // for each element in ransomNote, subtract with the number of
  // the same occurences
  for (let element of ransomNote) {
    if (magMap.has(element) && magMap.get(element) !== 0) {
      magMap.set(element, magMap.get(element) - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(canConstruct(ransomNote, magazine));
