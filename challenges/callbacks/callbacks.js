/** @format */

const { type } = require('os');

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, (char) => (alphabet += char));
console.log('alphabet:', alphabet);

// Challenge 5
function mapWith(array, callback) {
  let mappedArray = [];
  forEach(array, (each) => mappedArray.push(callback(each)));
  return mappedArray;
}

console.log(mapWith(letters, addS));

// Challenge 6
function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  forEach(array, (each) => (accumulator = callback(accumulator, each)));
  // for (var i = 0; i < array.length; i++) {
  //	 accumulator = callback(accumulator, array[i]);
  // }
  return accumulator;
}

/*
using forEach function, excution steps
accumulator = callback(accumulator, array[0]) 
accumulator = callback(callback(accumulator, array[0]), array[1])
accumulator = callback(callback(callback(accumulator, array[0]), array[1]), array[2])
...
*/

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0));

const pushAndReturn = (array, elem) => {
  array.push(elem);
  return array;
};

// Challenge 7
function intersection(arrays) {
  return arrays.reduce((acc, currentArray) =>
    currentArray.filter((each) => acc.includes(each))
  );
}

console.log(
  'intersections',
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((acc, currentArray) => {
    const newElements = currentArray.filter((each) => !acc.includes(each));
    return acc.concat(newElements);
  });
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const addPairAndReturn = (hash, key, value) => {
  hash[key] = value;
  return hash;
};

// Challenge 9
function objOfMatches(array1, array2, callback) {
  return array1.reduce(
    (acc, each, index) =>
      (callback(each) === array2[index] &&
        addPairAndReturn(acc, each, array2[index])) ||
      acc,
    {}
  );
}

console.log(
  objOfMatches(
    ['hi', 'howdy', 'bye', 'later', 'hello'],
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  return reduce(
    arrVals,
    (acc, each) => {
      const result = mapWith(arrCallbacks, (callback) => callback(each));
      acc[each] = result;
      return acc;
    },
    {}
  );
}

console.log(
  multiMap(
    ['catfood', 'glue', 'beer'],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const values = Object.values(obj);
  return Object.keys(obj).reduce(
    (accumulator, currentKey, index) =>
      (callback(currentKey) === values[index] &&
        addPairAndReturn(accumulator, currentKey, values[index])) ||
      accumulator,
    {}
  );
}

const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};
console.log(objectFilter(cities, (city) => city.toUpperCase()));
// Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  return numberOfTrues(array, callback) > fiftyPercentOfElements(array);
}

function numberOfTrues(array, callback) {
  return reduce(array, (acc, each) => (callback(each) && acc + 1) || acc, 0);
}

function fiftyPercentOfElements(array) {
  return array.length / 2;
}

// /*** Uncomment these to check your work! ***/
const isOdd2 = function (num) {
  return num % 2 === 1;
};
// numberOfTrues([2,4,6,8,0,12,14,16], isOdd2);
console.log(majority([1, 2, 3, 4, 5], isOdd2)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd2)); // should log: false

// Challenge 13
// define new functions for readability
const addAtTheBeginning = (array, each) => array.unshift(each);
const addAtTheEnd = (array, each) => array.push(each);

function prioritize(array, callback) {
  return reduce(
    array,
    (acc, each) =>
      // (callback(each) && acc.unshift(each) && acc) || (acc.push(each) && acc),
      ((callback(each) && addAtTheBeginning(acc, each)) ||
        addAtTheEnd(acc, each)) &&
      acc,
    []
  );
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === 's' || str[0] === 'S';
};
console.log(
  prioritize(
    ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
    startsWithS
  )
);
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'];

// Challenge 14
function countBy(array, callback) {
  return array.reduce((acc, each) => {
    console.log(callback(each));
    if (acc[callback(each)]) {
      acc[callback(each)] = 1 + acc[callback(each)];
    } else {
      acc[callback(each)] = 1;
    }
    return acc;
  }, {});
}

function evenOrOddNumber(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
}

console.log(countBy([1, 2, 3, 4, 5], evenOrOddNumber)); // should log: { odd: 3, even: 2 }

// Challenge 15
const initializeArrayWithinHash = (hash, key, value) => {
  hash[key] = [value];
  return hash;
};
function groupBy(array, callback) {
  return reduce(
    array,
    (acc, each) =>
      (!acc[callback(each)] &&
        initializeArrayWithinHash(acc, callback(each), each)) ||
      (acc[callback(each)].push(each) && acc),
    {}
  );
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored));
// should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  return reduce(
    Object.entries(obj),
    (acc, pair) => (callback(pair[1]) && acc.push(pair[0]) && acc) || acc,
    []
  );
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: 'priest',
  dennis: 'calculating',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func1(func2(value)) === func2(func1(value));
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  return reduce(
    Object.entries(obj),
    (acc, each) =>
      (callback(each[0]) === each[1] &&
        addPairAndReturn(acc, each[0], each[1])) ||
      acc,
    {}
  );
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log('objFilter');
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19

function numberOfreturningTrue(arrOfFuncs, value) {
  return reduce(
    arrOfFuncs,
    (totalOfTrues, func) => (func(value) && totalOfTrues + 1) || totalOfTrues,
    0
  );
}

function rating(arrOfFuncs, value) {
  return numberOfreturningTrue(arrOfFuncs, value * 100) / arrOfFuncs.length;
}

/*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log('rating');
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  const firstFunc = arrOfFuncs.shift();
  return reduce(arrOfFuncs, (acc, func) => func(acc), firstFunc(value));
}

/*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log('pipe');
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunctionBetween(arrOfFunc1, objOfFunc2, input) {
  const result =
    (arrOfFunc1[1](input) > objOfFunc2.output && {
      output: arrOfFunc1[1](input),
      name: arrOfFunc1[0],
    }) ||
    objOfFunc2;
  return result;
}

function highestFunc(objOfFuncs, input) {
  const arrOfFunctions = Object.entries(objOfFuncs);
  const firstFunc = arrOfFunctions.shift();
  const initialFunction = { name: firstFunc[0], output: firstFunc[1](input) };
  const theHighest = arrOfFunctions.reduce(
    (highestUntilNow, currentFunc) =>
      highestFunctionBetween(currentFunc, highestUntilNow, input),
    initialFunction
  );
  return theHighest.name;
}

/*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log('highestFunc');
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return pipe(arrOfFuncs, startVal);
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

function addTen(num) {
  return num + 10;
}

/*** Uncomment these to check your work! ***/
console.log('combineOperations');
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  const findATrue = array.some((each) => callback(each));
  return findATrue || -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

/*** Uncomment these to check your work! ***/
console.log('myFunc');
console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  forEach(array, callback);
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

/*** Uncomment these to check your work! ***/
const arrOfNumbers = [1, 2, 3];
console.log('myForEach');
myForEach(arrOfNumbers, addToSum);
console.log(sum); // Should output 6
