/** @format */

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
  return function () {
    console.log('hello');
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
console.log('createFunction()');
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
console.log('createFunctionPrinter(input)');
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

/*** Uncomment these to check your work! ***/
/*
there are two execution contexts, one for `willCounter` and other for `jasCounter`.
Each execution context has its own backpack, where in each backpack is stores `outer`.
`willCounter` is tottaly independent from `jayCounter`
*/
console.log('counter()');
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  return (y) => x + y;
}

/*** Uncomment these to check your work! ***/
console.log('addByX(x)');
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let result; // `result` is memorize
  return (input) => {
    if (result) {
      return result;
    } else {
      result = func(input);
      return result;
    }
  };
}

function onceMoreLegible(func) {
  let result; // `result` is memorize
  return (input) => result || (result = func(input));
}

/*** Uncomment these to check your work! ***/
console.log('once()');
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counterUntilNow = 0;
  return () => counterUntilNow++ && counterUntilNow === count && func();
}

/*** Uncomment these to check your work! ***/
console.log('after(count, funct)');
const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed

// CHALLENGE 6
function delay(func, wait) {
  return (...args) => setTimeout(func, wait, ...args);
}

console.log('delay(func), wait');
const printTheFuture = (mission, vision) =>
  console.log(`${mission} e doppio?, ${vision}`);
const myMission = delay(printTheFuture, 3000);
myMission('me ne vado a milano l anno prossimo', 'my vision');

// CHALLENGE 7
function rollCall(names) {
  return () => {
    if (names.length) {
      console.log(names.shift());
    } else console.log('Everyone accounted for');
  };
}

// /*** Uncomment these to check your work! ***/
console.log('rollCall(name)');
const rollCaller = rollCall(['Juan', 'Victoria', 'Ruth']);
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'
rollCaller(); // => should log 'Everyone accounted for'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let result = {};
  return (input) => {
    if (input === magicWord) {
      return result;
    } else {
      result[input] = func(input);
      return result[input];
    }
  };
}

/*** Uncomment these to check your work! ***/
console.log('saveOutput(func, magicWord)');
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let index = -1;
  return () => {
    index++;
    return array[index % array.length];
  };
}

/*** Uncomment these to check your work! ***/
console.log('cycleIterator(array)');
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return (arg2) => func(arg, arg2);
}

/*** Uncomment these to check your work! ***/

console.log('defineFirstArg(func, arg)');
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  let accumulator = {};
  return function (arg1, arg2) {
    if (arg2) {
      accumulator[arg1] = arg2;
    } else {
      return Object.entries(accumulator).reduce((acc, [key, value]) => {
        return acc.replace(key, value);
      }, arg1);
    }
  };
}

/*** Uncomment these to check your work! ***/
console.log('censor()');
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let setValue = secret;
  return {
    getSecret: () => secret,
    setSecret: (value) => (setValue = value),
  };
}

/*** Uncomment these to check your work! ***/
console.log('createSecretHolder(secret)');
//obj = createSecretHolder(5);
//obj.getSecret(); // => returns 5
//obj.setSecret(2);
//obj.getSecret(); // => returns 2

// CHALLENGE 14
function callTimes() {
  let counter = 0;
  return () => ++counter;
}

/*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function russianRoulette(num) {
  let counter = 0;
  return () => {
    counter++;
    if (counter < num) return 'click';
    else {
      if (counter === num) return 'bang';
      else return ' reload to play again';
    }
  };
}

/*** Uncomment these to check your work! ***/
console.log('russianRoulette(num)');
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'bang'
console.log(play()); // => should log 'reload to play again'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16
function average() {
  let avg = 0;
  let count = 0;
  return (num) => {
    if (num) {
      count++;
      avg = (avg * (count - 1) + num) / count;
      return avg;
    } else return avg;
  };
}

/*** Uncomment these to check your work! ***/
console.log('average()');
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let tester = false;
  return (callback) =>
    arrOfTests.reduce((tester, current) => {
      return tester && callback(current[0]) === current[1];
    }, true);
}

/*** Uncomme'nt these to check your work! ***/
console.log('makeFuncTester(arrOfTests)');
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  let array = [];
  return (str) => {
    if (str === 'undo') {
      const elem = array.shift();
      if (elem) return `${elem} undone`;
      else return 'nothing to undo';
    } else {
      array.unshift(str);
      array.length == 3 && array.pop();
      return `${str} done`;
    }
  };
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {
  let sum = 0;

  return (num1, num2) => () => {
    if (sum === 0) {
      sum = num1 + num2;
      return sum;
    } else {
      const elem = array.shift();
      sum = sum + elem;
      if (sum < 21) {
        return sum;
      } else {
        sum = 0;
        return 'bust';
      }
    }
  };
}

/*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([
  2,
  6,
  1,
  7,
  11,
  4,
  6,
  3,
  9,
  8,
  9,
  3,
  10,
  4,
  5,
  3,
  7,
  4,
  9,
  6,
  10,
  11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
