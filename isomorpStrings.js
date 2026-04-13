// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

var string1 = "paper";
var string2 = "title";

var isIsomorph = function (s, t) {
  if (s.length !== t.length) return false;

  // check the assign from s to t
  let map1 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i])) {
      map1.set(s[i], t[i]);
    } else {
      if (map1.get(s[i]) !== t[i]) return false;
    }
  }

  // check the assign from t to s
  let map2 = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!map2.has(t[i])) {
      map2.set(t[i], s[i]);
    } else {
      if (map2.get(t[i]) !== s[i]) return false;
    }
  }

  return true;
};

console.log(isIsomorph(string1, string2));
