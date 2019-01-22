'use strict';

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
    return pathSimplified.substring(0, pathSimplified.length -1);
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

challenge1.forEach(function(item){
    console.log('inputValue:', item.inputValue);
    console.log('expectedValue:', item.expectedValue);
    let value = simplifiedDirectory(item.inputValue);
    console.log('value:', value, item.expectedValue === value);
});