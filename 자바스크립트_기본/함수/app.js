/** 함수 선언 */
function showMessage() {
  alert('Hello!');
}

// showMessage();
// showMessage(); 같은 동작을 두 번 할 때도, 코드중복 없이 호출만 두 번 하면됨

/** 지역변수 */
function sayHello() {
  let message = 'hello!'; // 지역변수
  console.log(message);
}

sayHello();
// console.log(message); // app.js:16 Uncaught ReferenceError: message is not defined

/** 외부변수 */
/* 외부변수 접근하기 */
let userName = 'John';

function sayHello2() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

sayHello2();

/* 외부변수 수정하기 */
let userName2 = 'Jenny';

function showMessage2() {
  userName2 = 'Bob';
  let message = 'Hello, ' + userName2;
  console.log(message);
}

console.log(userName2);
showMessage2();
console.log(userName2); // 함수 실행 이후, 외부변수 수정됨!

/* 외부변수와 같은 이름을 가진 지역변수 */
let userName3 = 'Charlotte';

function showMessage3() {
  let userName3 = 'Babara';
  let message = 'Hello, ' + userName3;
  console.log(message);
}

showMessage3(); // Hello, Babara 함수는 내부변수 userName3 사용
console.log(userName3); // Charlotte 외부변수 userName3는 아무일 없음
