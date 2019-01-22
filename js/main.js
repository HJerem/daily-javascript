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