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

/** 매개변수 */
function showMessage4(from, text) {
  console.log(from + ': ' + text);
}

showMessage4('Ann', 'Hello!');
showMessage4('Ann', "What's up?");

function showMessage5(from2, text) {
  from2 = '*' + from2 + '*'; // 할당연산자는 이 중에서 가장 마지막에 연산됨! 그래서 오른쪽부터 연산 시작됨

  console.log(from2 + ': ' + text);
}

let from2 = 'Cindy';

showMessage5(from2, 'Hello');
console.log(from2);

/** 기본값 */
function showMessage6(from, text = 'no text given') {
  let message = from + ': ' + text;
  console.log(message);
}

showMessage6('Kate');

/* 복잡한 표현식의 기본값 */
function anotherFunction() {
  return 'Hi';
}

function showMessage7(from, text = anotherFunction()) {
  console.log(from + ' says, ' + text);
}

showMessage7('Anna');

/** 매개변수 기본값을 설정할 수 있는 또 다른 방법 */
function showMessage8(text) {
  if (text === undefined) {
    text = '빈문자열';
  }
  console.log(text);
}

showMessage8();
showMessage8(88);

function showMessage9(text) {
  text = text || '빈문자열'; // 반환값을 사용하려면 할당해서 사용할 것
  // text로 어떤 값을 설정할지 정하는 것

  console.log(text);
}

showMessage9();
showMessage9('ahaha');
showMessage9(0); // ||사용할 경우, falsy값을 처리하진 못함
showMessage9('');

function showMessage10(text) {
  text = text ?? '빈문자열';
  console.log(text);
}

showMessage10();
showMessage10('ahaha');
showMessage10(0); // ??의 경우, falsy값까지 undefined와 구분해서 사용할 수 있음
showMessage10('');

function showCount(count) {
  // 반환값을 어떤식으로 이용할 것인지 잘 생각하기
  console.log(count ?? 'unknown');
}

showCount();
showCount(null);
showCount(0);

/** 반환값 */
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);
