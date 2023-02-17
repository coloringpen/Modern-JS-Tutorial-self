var message = '안녕하세요';
console.log(message);

// 'VAR'는 블록 스코프가 없습니다
if (true) {
  var test = true;
}

console.log(test);

if (true) {
  let test2 = true;
}

// console.log(test2); app.js:15 Uncaught ReferenceError: test2 is not defined

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// 인자와 리턴값 모두 generic
function last(arr) {
  return arr[-1];
}

// 인자와 리턴값 모두 generic
function prepend(arr, item) {
  return [item, ...arr];
}

// 인자와 리턴값 모두 generic
function mix(arr1, arr2) {
  return [...arr1, ...arr2];
}

// 인자는 generic 배열, 리턴값은 number
function count(arr) {
  return arr.length;
}

// generic 배열 인자, number나 null 리턴값
function findIndex(arr, item) {
  const result = arr.findIndex((i) => i === item);
  return result === -1 ? null : result;
}

// generic배열, number 인자 두개, generic 리턴값
function slice(arr, startIndex, endIndex) {
  return arr.slice(startIndex, endIndex + 1);
}

console.log(count(animals));

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i, '여기서도 확인가능!');

function sayHi() {
  if (true) {
    var phrase2 = 'Hello';

    console.log(phrase2);
  }
}

sayHi();
// console.log(phrase2); // ReferenceError: phrase2 is not defined

/** var tolerates redeclarations */
let user;
// let user; SyntaxError: Identifier 'user' has already been declared

var user1;
var user1 = 'John';

console.log(user1);
