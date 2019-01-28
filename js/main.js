"use strict";

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 1
|--------------------------------------------------------------------------|
*/
function simplifiedDirectory(path) {
  let pathSimplified = "";
  let splitted = path.split("/");
  splitted.forEach(function(value, index) {
    if (value === "..") {
      delete splitted[index - 1];
      delete splitted[index];
    } else if (value === ".") {
      delete splitted[index];
    }
  });
  splitted.forEach(function(value) {
    pathSimplified += value + "/";
  });
  return pathSimplified.substring(0, pathSimplified.length - 1);
}

const challenge1 = [
  {
    inputValue: "/root/.",
    expectedValue: "/root"
  },
  {
    inputValue: "/games/football/..",
    expectedValue: "/games"
  },
  {
    inputValue: "/weather/./clouds/../rain",
    expectedValue: "/weather/rain"
  }
];

// challenge1.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = simplifiedDirectory(item.inputValue);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 2
|--------------------------------------------------------------------------|
|
| for strings: indexOf (which finds the index of a string within a string), substr()
| (which returns a substring from within a string), and split() (which returns a string split into an array)
|
| for arrays: sort() (sorts an array), map() (puts each element into a function and stores the return values into a
| new array), and join() (combines all the elements of an array into a string)
|
| for numbers: parseInt() (converts a string into an integer if it contains integers), parseFloat()
| (converts a string into a floating point number if it contains a floating point number), isNan() (used to test if a
| variable is a number, returns true if variable is NOT a number, and false if variable is a number).
|
*/

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 3
|--------------------------------------------------------------------------|
*/

function makeSquares(int) {
  let string = int.toString();
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    // convert to int and calculate square
    const intValue = parseInt(string.charAt(i));
    const square = intValue * intValue;
    //convert back to string
    newString += square.toString();
  }

  // convert back to int
  return parseInt(newString);
}

const challenge3 = [
  {
    inputValue: 12,
    expectedValue: 14
  },
  {
    inputValue: 1361,
    expectedValue: 19361
  }
];

// challenge3.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = makeSquares(item.inputValue);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 4
|--------------------------------------------------------------------------|
*/

function doubleLetter(string, index) {
  let charToDouble = string.charAt(index);
  return string.substring(0, index) + charToDouble + string.substring(index);
}

const challenge4 = [
  {
    inputValue: ["shipyard", 5],
    expectedValue: "shipyaard"
  },
  {
    inputValue: ["water", 2],
    expectedValue: "watter"
  }
];

// challenge4.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = doubleLetter(item.inputValue[0], item.inputValue[1]);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 5 - TODO
|--------------------------------------------------------------------------|
*/

function countMoves(string, arrangedString) {
  // considering string and arrangedString contains same letters
  if (string.length !== arrangedString.length) {
    return -1;
  }

  let indexNeedsToBeMoved = [];

  // compare characters to know what needs to be moved
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== arrangedString.charAt(i)) {
      indexNeedsToBeMoved.push(i);
    }
  }
  console.log("indexNeedsToBeMoved", indexNeedsToBeMoved);
}

const challenge5 = [
  {
    inputValue: ["twitter", "ittertw"],
    expectedValue: 5
  },
  {
    inputValue: ["twitter", "wtittre"],
    expectedValue: 2
  }
];

// challenge5.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = countMoves(item.inputValue[0], item.inputValue[1]);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 6
|--------------------------------------------------------------------------|
*/

function noRepeatInSubstring(string) {
  let count = 1;
  let finalCount = 1;
  for (let i = 0; i < string.length; i++) {
    if (i + 1 < string.length) {
      if (string.charAt(i) !== string.charAt(i + 1)) {
        count++;
      } else {
        count = 1;
      }
    }
    if (count > finalCount) {
      finalCount = count;
    }
  }
  return finalCount;
}

const challenge6 = [
  {
    inputValue: "hooney",
    expectedValue: 4
  },
  {
    inputValue: "aablle",
    expectedValue: 3
  },
  {
    inputValue: "cccccc",
    expectedValue: 1
  }
];

// challenge6.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = noRepeatInSubstring(item.inputValue);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 7
|--------------------------------------------------------------------------|
*/

function putInOrder(firstArray, secondArray) {
  let orderedArray = firstArray.concat(secondArray);
  return orderedArray.sort((a, b) => a - b);
}

function compareArray(firstArray, secondArray) {
  let equal = true;
  firstArray.forEach(function(value, index) {
    if (value !== secondArray[index]) {
      equal = false;
    }
  });
  return equal;
}

const challenge7 = [
  {
    inputValue: [[1, 3, 5], [2, 4, 6]],
    expectedValue: [1, 2, 3, 4, 5, 6]
  },
  {
    inputValue: [[2, 3, 7, 10], [1, 4, 9]],
    expectedValue: [1, 2, 3, 4, 7, 9, 10]
  },
  {
    inputValue: [[1, 2], [2, 3, 4]],
    expectedValue: [1, 2, 2, 3, 4]
  }
];

// challenge7.forEach(function (item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = putInOrder(item.inputValue[0], item.inputValue[1]);
//   console.warn(
//     "--- RESULT --- value:",
//     value,
//     compareArray(item.expectedValue, value)
//   );
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 8
|--------------------------------------------------------------------------|
*/

function noDuplicates(string) {
  let numberOfRearrangements = 0;

  return numberOfRearrangements;
}

const challenge8 = [
  {
    inputValue: "cook",
    expectedValue: 4
  }
];

// challenge8.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = noDuplicates(item.inputValue, item.inputValue);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 9
|--------------------------------------------------------------------------|
*/

function matchDigits(firstNumber, secondNumber) {
  let nbDigitsMatch = 0;
  // compare each digit of the two numbers to count how many digits match
  let sFirstNumber = firstNumber.toString();
  let sSecondNumber = secondNumber.toString();
  for (let i = 0; i < sFirstNumber.length; i++) {
    if (sFirstNumber.charAt(i) === sSecondNumber.charAt(i)) {
      nbDigitsMatch++;
    }
  }
  return nbDigitsMatch;
}

const challenge9 = [
  {
    inputValue: [1221, 2123],
    expectedValue: 1
  },
  {
    inputValue: [14352, 16335],
    expectedValue: 2
  }
];

challenge9.forEach(function(item) {
  console.log("inputValue:", item.inputValue);
  console.log("expectedValue:", item.expectedValue);
  let value = matchDigits(item.inputValue[0], item.inputValue[1]);
  console.warn("--- RESULT --- value:", value, item.expectedValue === value);
});

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 10
|--------------------------------------------------------------------------|
*/

function inBetween(string, number) {
  let sNumber = number.toString();
  let finalString = "";
  let maxLength =
    sNumber.length > string.length ? sNumber.length : string.length;
  for (let i = 0; i < maxLength; i++) {
    finalString += string.charAt(i) + sNumber.charAt(i);
  }
  return finalString;
}

const challenge10 = [
  {
    inputValue: ["hurry", 1234],
    expectedValue: "h1u2r3r4y"
  },
  {
    inputValue: ["number", 345],
    expectedValue: "n3u4m5ber"
  },
  {
    inputValue: ["cat", 345678],
    expectedValue: "c3a4t5678"
  }
];

challenge10.forEach(function(item) {
  console.log("inputValue:", item.inputValue);
  console.log("expectedValue:", item.expectedValue);
  let value = inBetween(item.inputValue[0], item.inputValue[1]);
  console.warn("--- RESULT --- value:", value, item.expectedValue === value);
});

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 11
|--------------------------------------------------------------------------|
*/

function reverseInBetween(string, number) {
  let sNumber = number.toString();
  let sNumberReversed = "";
  // reverse number
  for (let i = sNumber.length; i >= 0; i--) {
    sNumberReversed += sNumber.charAt(i);
  }
  let finalString = "";
  let maxLength =
    sNumber.length > string.length ? sNumber.length : string.length;
  for (let i = 0; i < maxLength; i++) {
    finalString += string.charAt(i) + sNumberReversed.charAt(i);
  }
  return finalString;
}

const challenge11 = [
  {
    inputValue: ["hurry", 1234],
    expectedValue: "h4u3r2r1y"
  },
  {
    inputValue: ["number", 345],
    expectedValue: "n5u4m3ber"
  },
  {
    inputValue: ["cat", 345678],
    expectedValue: "c8a7t6543"
  }
];

// challenge11.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = reverseInBetween(item.inputValue[0], item.inputValue[1]);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });
