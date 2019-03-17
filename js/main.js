/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 1
|--------------------------------------------------------------------------|
*/
function simplifiedDirectory(path) {
  let pathSimplified = '';
  const splitted = path.split('/');
  splitted.forEach((value, index) => {
    if (value === '..') {
      delete splitted[index - 1];
      delete splitted[index];
    } else if (value === '.') {
      delete splitted[index];
    }
  });
  splitted.forEach(value => {
    pathSimplified += `${value}/`;
  });
  return pathSimplified.substring(0, pathSimplified.length - 1);
}

const challenge1 = [
  {
    inputValue: '/root/.',
    expectedValue: '/root'
  },
  {
    inputValue: '/games/football/..',
    expectedValue: '/games'
  },
  {
    inputValue: '/weather/./clouds/../rain',
    expectedValue: '/weather/rain'
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
| ✔️ Daily Javascript: Email 2
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
| ✔️ Daily Javascript: Email 3
|--------------------------------------------------------------------------|
*/

function makeSquares(int) {
  const string = int.toString();
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    // convert to int and calculate square
    const intValue = parseInt(string.charAt(i));
    const square = intValue * intValue;
    // convert back to string
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
| ✔️ Daily Javascript: Email 4
|--------------------------------------------------------------------------|
*/

function doubleLetter(string, index) {
  const charToDouble = string.charAt(index);
  return string.substring(0, index) + charToDouble + string.substring(index);
}

const challenge4 = [
  {
    inputValue: ['shipyard', 5],
    expectedValue: 'shipyaard'
  },
  {
    inputValue: ['water', 2],
    expectedValue: 'watter'
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
| ❌ Daily Javascript: Email 5
|--------------------------------------------------------------------------|
*/

function countMoves(string, arrangedString) {
  let moves = 0;
  // considering string and arrangedString contains same letters
  if (string.length !== arrangedString.length) {
    return -1;
  }

  let firstStringPositions = [];
  let secondStringPositions = [];

  for (let i = 0; i < string.length; i++) {
    firstStringPositions[i] = string.charAt(i);
  }
  for (let i = 0; i < arrangedString.length; i++) {
    secondStringPositions[i] = arrangedString.charAt(i);
  }

  console.log(firstStringPositions, secondStringPositions);
  let correctPositions = [];
  for (let i = 0; i < arrangedString.length; i++) {
    if (firstStringPositions[i] === secondStringPositions[i]) {
      correctPositions[i] = 1;
    } else {
      correctPositions[i] = 0;
    }
  }
  console.log('correctPositions', correctPositions);

  let finalString = string.split('');
  // for each letter in first string
  // while (finalString !== arrangedString) {
  for (let i = 0; i < string.length; i++) {
    let initialChar = firstStringPositions[i];
    let neededChar = secondStringPositions[i];

    finalString;

    console.log(initialChar, neededChar);
    console.log(finalString);
    console.log(finalString.join(''));
  }
  // }

  return moves;
}

const challenge5 = [
  {
    inputValue: ['twitter', 'ittertw'],
    expectedValue: 5
  }
  // {
  //   inputValue: ["twitter", "wtittre"],
  //   expectedValue: 2
  // }
];

// challenge5.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = countMoves(item.inputValue[0], item.inputValue[1]);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 6
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
    inputValue: 'hooney',
    expectedValue: 4
  },
  {
    inputValue: 'aablle',
    expectedValue: 3
  },
  {
    inputValue: 'cccccc',
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
| ✔️ Daily Javascript: Email 7
|--------------------------------------------------------------------------|
*/

function putInOrder(firstArray, secondArray) {
  const orderedArray = firstArray.concat(secondArray);
  return orderedArray.sort((a, b) => a - b);
}

function compareArray(firstArray, secondArray) {
  let equal = true;
  firstArray.forEach((value, index) => {
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
| ❌ Daily Javascript: Email 8
|--------------------------------------------------------------------------|
*/

function noDuplicates(string) {
  const numberOfRearrangements = 0;

  return numberOfRearrangements;
}

const challenge8 = [
  {
    inputValue: 'cook',
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
| ✔️ Daily Javascript: Email 9
|--------------------------------------------------------------------------|
*/

function matchDigits(firstNumber, secondNumber) {
  let nbDigitsMatch = 0;
  // compare each digit of the two numbers to count how many digits match
  const sFirstNumber = firstNumber.toString();
  const sSecondNumber = secondNumber.toString();
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

// challenge9.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = matchDigits(item.inputValue[0], item.inputValue[1]);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 10
|--------------------------------------------------------------------------|
*/

function inBetween(string, number) {
  const sNumber = number.toString();
  let finalString = '';
  const maxLength =
    sNumber.length > string.length ? sNumber.length : string.length;
  for (let i = 0; i < maxLength; i += 1) {
    finalString += string.charAt(i) + sNumber.charAt(i);
  }
  return finalString;
}

const challenge10 = [
  {
    inputValue: ['hurry', 1234],
    expectedValue: 'h1u2r3r4y'
  },
  {
    inputValue: ['number', 345],
    expectedValue: 'n3u4m5ber'
  },
  {
    inputValue: ['cat', 345678],
    expectedValue: 'c3a4t5678'
  }
];

// challenge10.forEach(function(item) {
//   console.log("inputValue:", item.inputValue);
//   console.log("expectedValue:", item.expectedValue);
//   let value = inBetween(item.inputValue[0], item.inputValue[1]);
//   console.warn("--- RESULT --- value:", value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 11
|--------------------------------------------------------------------------|
*/

function reverseInBetween(string, number) {
  const sNumber = number.toString();
  let sNumberReversed = '';
  // reverse number
  for (let i = sNumber.length; i >= 0; i--) {
    sNumberReversed += sNumber.charAt(i);
  }
  let finalString = '';
  const maxLength =
    sNumber.length > string.length ? sNumber.length : string.length;
  for (let i = 0; i < maxLength; i++) {
    finalString += string.charAt(i) + sNumberReversed.charAt(i);
  }
  return finalString;
}

const challenge11 = [
  {
    inputValue: ['hurry', 1234],
    expectedValue: 'h4u3r2r1y'
  },
  {
    inputValue: ['number', 345],
    expectedValue: 'n5u4m3ber'
  },
  {
    inputValue: ['cat', 345678],
    expectedValue: 'c8a7t6543'
  }
];

// challenge11.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = reverseInBetween(item.inputValue[0], item.inputValue[1]);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 13
|--------------------------------------------------------------------------|
*/

function reverseWordsAndSentence(string) {
  let reverseString = '';
  for (let i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i);
  }
  return reverseString;
}

const challenge13 = [
  {
    inputValue: 'This cat likes milk',
    expectedValue: 'klim sekil tac sihT'
  }
];

// challenge13.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = reverseWordsAndSentence(item.inputValue);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 15
|--------------------------------------------------------------------------|
*/

function getNextCharacterInAlphabet(character, shift = 1) {
  let characterCharCode = character.charCodeAt(0);
  if (characterCharCode === 122) {
    characterCharCode = 97;
    shift--;
  }

  return String.fromCharCode(characterCharCode + shift);
}

function shiftLetters(string, shift) {
  let resultString = '';
  const moveToDo = [];
  // get first element from shift array, then third, then fifth, etc...
  for (let i = 0; i < shift.length; i++) {
    if (i % 2 === 0 && i + 1 in shift) {
      moveToDo.push([shift[i], shift[i + 1]]);
    }
  }
  let shiftNeeded = false;

  // for each letter in string, check if there is a shift needed
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < moveToDo.length; j++) {
      if (moveToDo[j][0] === i + 1) {
        shiftNeeded = true;
        numberShift = moveToDo[j][1];
        break;
      }
    }
    if (shiftNeeded) {
      resultString += getNextCharacterInAlphabet(string.charAt(i), numberShift);
    } else {
      resultString += string.charAt(i);
    }
    shiftNeeded = false;
  }
  return resultString;
}

const challenge15 = [
  {
    inputValue: ['Computer', [1, 3, 4, 5]],
    expectedValue: 'Fomuuter'
  }
];

// challenge15.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = shiftLetters(item.inputValue[0], item.inputValue[1]);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 17
|--------------------------------------------------------------------------|
*/

function fibonacci(sequencePosition) {
  let fibonnaciArray = [1, 1];
  while (typeof fibonnaciArray[sequencePosition] === 'undefined') {
    // get last two characters, make an addition and add theme to sequence
    let firstNumber = fibonnaciArray[fibonnaciArray.length - 2];
    let secondNumber = fibonnaciArray[fibonnaciArray.length - 1];
    let addition = firstNumber + secondNumber;
    fibonnaciArray.push(addition);
  }
  return fibonnaciArray[sequencePosition - 1];
}

const challenge17 = [
  {
    inputValue: 1,
    expectedValue: 1
  },
  {
    inputValue: 2,
    expectedValue: 1
  },
  {
    inputValue: 6,
    expectedValue: 8
  },
  {
    inputValue: 9,
    expectedValue: 34
  }
];

// challenge17.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = fibonacci(item.inputValue);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ✔️ Daily Javascript: Email 19
|--------------------------------------------------------------------------|
*/

function removeNumber(arrayToClean, numberToRemove) {
  for (let i = arrayToClean.length; i >= 0; i--) {
    if (arrayToClean[i] === numberToRemove) {
      arrayToClean.splice(i, 1);
    }
  }
  return arrayToClean.length;
}

const challenge19 = [
  {
    inputValue: [[1, 2, 3, 3, 4, 3, 5], 3],
    expectedValue: 4
  }
];

// challenge19.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = removeNumber(item.inputValue[0], item.inputValue[1]);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ❌ Daily Javascript: Email 20
|--------------------------------------------------------------------------|
*/

function findIntegersFromSum(intArray, sum) {
  // check if one or more of numbers in intArray can addition to sum
}

const challenge20 = [
  {
    inputValue: [[1, 3, 4, 11, 5, 10], 22],
    expectedValue: [1, 10, 11]
  }
];

// challenge20.forEach(function(item) {
//   console.log('inputValue:', item.inputValue);
//   console.log('expectedValue:', item.expectedValue);
//   let value = findIntegersFromSum(item.inputValue[0], item.inputValue[1]);
//   console.warn('--- RESULT --- value:', value, item.expectedValue === value);
// });

/*
|--------------------------------------------------------------------------
| ❌ Daily Javascript: Email 21
|--------------------------------------------------------------------------|
*/

function findIntegersFromSum(intArray, sum) {
  // check if one or more of numbers in intArray can addition to sum
}

const challenge20 = [
  {
    inputValue: [[1, 3, 4, 11, 5, 10], 22],
    expectedValue: [1, 10, 11]
  }
];

challenge20.forEach(function(item) {
  console.log('inputValue:', item.inputValue);
  console.log('expectedValue:', item.expectedValue);
  let value = findIntegersFromSum(item.inputValue[0], item.inputValue[1]);
  console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});
