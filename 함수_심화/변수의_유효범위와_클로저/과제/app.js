'use strict';

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

/** counter 객체 - 중첩함수는 새로운 객체의 프로퍼티 형태나 중첩함수 그 자체로 반환될 수 있다*/

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

console.log(counter2);
console.log(counter2.up());
console.log(counter2.up());
console.log(counter2.down());

/** if 문 안의 함수 - 'use strict' 유무에 따라 function이 전역 스코프를 가질 수도, 블록 스코프를 가질 수도 있음*/
let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

/** 클로저를 이용하여 합 구하기 */
function sum(a) {
  let result = a;
  return function final(b) {
    console.log(result + b);
  };
}

sum(1)(2);
sum(5)(-1);

/** Is variable visible? */
let x2 = 1;

function func() {
  console.log(x2);

  let x2 = 2;
}

// func(); Cannot access 'x2' before initialization

/** 함수를 이용해 원하는 값만 걸러내기 */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function real(x) {
    return a <= x && b >= x;
  };
}

function inArray(arr) {
  // 매개변수들을 따로
  return function real(x) {
    // 따로 받아야 하는 경우, 이렇게 중첩함수를 이용해서 코드를 짜볼 수 있음
    for (let element of arr) {
      if (element === x) return true;
    }
  };
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([2, 5, 11])));

/** 필드를 기준으로 정렬하기 */
let users = [
  {
    name1: 'John',
    age: 20,
    surname: 'Johnson',
  },
  {
    name1: 'Pete',
    age: 18,
    surname: 'Peterson',
  },
  {
    name1: 'Ann',
    age: 19,
    surname: 'Hathaway',
  },
];

// // 이름을 기준으로 정렬(Ann, John,Pete)
console.log(
  users.sort((a, b) => (a.name1 > b.name1 ? 1 : -1)),
  'sort'
);

// 나이를 기준으로 정렬(Pete, Ann, John)
console.log(users.sort((a, b) => (a.age > b.age ? 1 : -1)));
console.log(users);

function byField(keyName) {
  return (a, b) => (a[keyName] > b[keyName] ? 1 : -1);
}

console.log(users.sort(byField('name1'))); // sort를 맨 마지막에 하는 것에 따라 다르다!
console.log(users.sort(byField('age')));
// 맨 마지막 sorting한 결과로 모든 콘솔이 찍힘 why?

let a = 1;

console.log((a += 1), 'push');
console.log((a += 1));
console.log((a += 1));
console.log(a);

let testobj = [1, 2, 3, 4];

testobj.push(1);
console.log(testobj);
testobj.push(2);
console.log(testobj);
testobj.push('finish');
console.log(testobj);

console.log(testobj.reverse(), 'reverse');
console.log(testobj.reverse(), 'reverse');
console.log(testobj.reverse(), 'reverse');
console.log(testobj.reverse(), 'reverse');

const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));
console.log(array1.fill(5, 1));
console.log(array1.fill(6));

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);
