// Questions
// 1. Fizzbuzz problem
// 2. If there are letters (a-z), convert into integer using Nokia Keypad
// 3. Loop until there is 10,000 count of a digit, display the i and the digit that reached 10,000
// word to numbers

var underLimit = true;
var digitCount = new Map();

var wordToNumber = function (str) {
  const nokiaChar = {
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

  let convertedStr = "";

  for (let char of str) {
    convertedStr += nokiaChar[char];
  }
  digitCounter(convertedStr);
};

// what digit reach 10 thousand count
var digitCounter = function (nums) {
  if (nums == undefined) return;

  for (let num of String(nums)) {
    if (digitCount.has(num)) {
      digitCount.set(num, digitCount.get(num) + 1);

      if (digitCount.get(num) == 10000) {
        underLimit = false;
        displayResult(num);
      }
    } else {
      digitCount.set(num, 1);
    }
  }
};

var displayResult = function (output) {
  console.log("limit reached: ", output);
};

var foobar = function () {
  let i = 0;

  while (underLimit) {
    let str = "";
    i++;
    if (i % 3 === 0) {
      str += "foo";
    }

    if (i % 5 === 0) {
      str += "bar";
    }

    if (str === "") {
      digitCounter(i);
    } else {
      digitCounter(wordToNumber(str));
    }
  }

  console.log("i: ", i);
};

foobar();

// Map(6) { '1' => 1, '2' => 4, '3' => 3, '6' => 6, '4' => 1, '7' => 3 }
// check if any of the digit reached 10,000
// need to use promise
