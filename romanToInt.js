// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

var roman = "MCMXCIV";

var romanToInt = function (str) {
  // we use arrays because the list is ordered, so we need the index
  let result = 0;
  let romans = [
    { key: "I", value: 1 },
    { key: "V", value: 5 },
    { key: "X", value: 10 },
    { key: "L", value: 50 },
    { key: "C", value: 100 },
    { key: "D", value: 500 },
    { key: "M", value: 1000 },
  ];

  let i = 0;

  while (i < str.length) {
    // compare the 2 index
    currentIndex = romans.findIndex((item) => item.key === str[i]);
    nextIndex = romans.findIndex((item) => item.key === str[i + 1]);

    //if currentIndex is less than nextIndex, the next index need to subtract the currentindex
    if (currentIndex < nextIndex) {
      let specialCase = romans[nextIndex].value - romans[currentIndex].value;
      result += specialCase;
      // go to the next 2
      i += 2;
    } else {
      result += romans[currentIndex].value;
      i++;
    }
  }

  return result;
};

console.log(romanToInt(roman));
// romanToInt(roman);
