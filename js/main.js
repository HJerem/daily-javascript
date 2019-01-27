'use strict';

/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 1
|--------------------------------------------------------------------------|
*/
function simplifiedDirectory(path) {
    let pathSimplified = '';
    let splitted = path.split('/');
    splitted.forEach(function (value, index) {
        if (value === '..') {
            delete splitted[index - 1];
            delete splitted[index];
        } else if (value === '.') {
            delete splitted[index];
        }
    });
    splitted.forEach(function (value) {
        pathSimplified += value + '/';
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
    },
];

challenge1.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = simplifiedDirectory(item.inputValue);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});

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
    let newString = '';
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
    },
];

challenge3.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = makeSquares(item.inputValue);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});


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
        inputValue: ['shipyard', 5],
        expectedValue: 'shipyaard'
    },
    {
        inputValue: ['water', 2],
        expectedValue: 'watter'
    },
];

challenge4.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = doubleLetter(item.inputValue[0], item.inputValue[1]);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});


/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 5
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
    console.log('indexNeedsToBeMoved', indexNeedsToBeMoved);
}

const challenge5 = [
    {
        inputValue: ['twitter', 'ittertw'],
        expectedValue: 5
    },
    {
        inputValue: ['twitter', 'wtittre'],
        expectedValue: 2
    },
];

challenge5.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = countMoves(item.inputValue[0], item.inputValue[1]);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});

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
        if(count > finalCount) {
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
    },
];

challenge6.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = noRepeatInSubstring(item.inputValue);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});



/*
|--------------------------------------------------------------------------
| Daily Javascript: Email 7
|--------------------------------------------------------------------------|
*/

function putInOrder(firstArray, secondArray) {
    let orderedArray = [];

    return orderedArray;
}

const challenge7 = [
    {
        inputValue: [[1,3,5]],
        expectedValue: 4
    },
    {
        inputValue: 'aablle',
        expectedValue: 3
    },
    {
        inputValue: 'cccccc',
        expectedValue: 1
    },
];

challenge7.forEach(function (item) {
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = putInOrder(item.inputValue[0], item.inputValue[1]);
    console.warn('--- RESULT --- value:', value, item.expectedValue === value);
});