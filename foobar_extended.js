// Questions

var digitCount = new Map();
var limitReached = false;

const digitCounter = function (input) {
  for (let digit of input.toString()) {
    if (digitCount.has(digit)) {
      digitCount.set(digit, digitCount.get(digit) + 1);
      if (digitCount.get(digit) === 10000) {
        limitReached = true;
        console.log("digit: ", digit);
      }
    } else {
      digitCount.set(digit, 1);
    }
  }
};

// 2. If there are letters (a-z), convert into integer using Nokia Keypad
const convertToNokia = function (nums) {
  const nokiaKeypad = {
    a: "2",
    b: "22",
    c: "222",
    d: "3",
    e: "33",
    f: "333",
    g: "4",
    h: "44",
    i: "444",
    j: "5",
    k: "55",
    l: "555",
    m: "6",
    n: "66",
    o: "666",
    p: "7",
    q: "77",
    r: "777",
    s: "9999",
    t: "8",
    u: "88",
    v: "888",
    w: "9",
    x: "99",
    y: "999",
    z: "9999",
  };

  let convertedString = "";

  for (let num of nums) {
    convertedString += nokiaKeypad[num];
  }

  return convertedString;
};

// 1. Fizzbuzz problem

const foobar = function () {
  let i = 0;
  while (!limitReached) {
    i++;
    let res = "";
    if (i % 3 === 0) {
      res += "foo";
    }
    if (i % 5 === 0) {
      res += "bar";
    }

    if (res) {
      digitCounter(convertToNokia(res));
    } else {
      digitCounter(i);
    }
  }
  console.log("i: ", i);
};

foobar();
console.log(digitCount);

// 3. Loop until there is 10,000 count of a digit, display the i and the digit that reached 10,000
