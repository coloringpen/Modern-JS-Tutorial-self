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
