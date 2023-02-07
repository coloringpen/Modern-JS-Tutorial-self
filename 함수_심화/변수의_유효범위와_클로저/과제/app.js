/** Does a function pickup latest changes? */
let hisName = 'John';

function sayHi() {
  console.log('Hi, ' + hisName);
}

hisName = 'Pete';
sayHi();

let x = 1;

function foo() {
  let x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

/** Which variables are available? */
function makeWorker() {
  let myName = 'Pete';

  return function () {
    console.log(myName);
  };
}

let myName = 'John';

let work = makeWorker();

work(); // "Pete"

/** Counter은 독립적인가 */
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter1());
console.log(counter1());

/** counter 객체 */

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };

  this.down = function () {
    return --count;
  };
}

let counter2 = new Counter();

console.log(counter2.up());
console.log(counter2.up());
console.log(counter2.down());
