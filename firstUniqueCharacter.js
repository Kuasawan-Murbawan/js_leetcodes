var firstUniqueChar = function (s) {
  let map = new Map();

  for (let elem of s) {
    map.set(elem, (map.get(elem) || 0) + 1);
  }

  let arr = [...map];

  arr = arr.sort((a, b) => {
    return a[1] - b[1];
  });

  if (arr[0][1] != 1) {
    return -1;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] == arr[0][0]) {
      return i;
    }
  }
};

console.log(firstUniqueChar("aabb"));
