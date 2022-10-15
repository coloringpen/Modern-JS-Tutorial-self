/** 함수 선언문 방식 -- 이것이 함수다! 선언하고 시작하는 방식 */
function sayHi() {
  console.log('hello');
}

/** 함수 표현식 방식 -- 함수를 값으로서 변수에 할당해두는 방식 */
let sayHi2 = function () {
  console.log('hello');
};

sayHi();
sayHi2();

/** 함수는 값 -- 값을 출력하는 방식으로 함수 코드를 출력 가능 */
console.log(sayHi); // sayHi() {console.log('hello');}
console.log(sayHi2); // () {console.log('hello');} 표현식으로 만들어진 함수의 경우, 함수 이름이 출력되진 않음

/* 함수를 복사해 다른 변수에 할당도 가능 */
let func = sayHi;
let func1 = sayHi2;

console.log(func1); // () {console.log('hello');}
console.log(func); // sayHi() {console.log('hello');}
func();
func1;
sayHi();

/** 콜백함수 -- 함수를 값처럼 인수로 전달하기 */
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no(); // confirm은 user의 답변에 따라 boolean 반환
  }
}

function showOk() {
  console.log('you have agreed');
}

function showCancel() {
  console.log('you pushed the cancel button');
}

// ask('do you agree?', showOk, showCancel);
// 전달한 함수를 필요한 경우 '나중에 호출(called back)'

function ask2(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask2(
//   '동의하십니까?',
//   // 익명함수. 변수에 할당되지 않았기 때문에, 이 코드 바깥에서는 접근 불가
//   function () {
//     console.log('동의하셨습니다');
//   },
//   function () {
//     console.log('취소 버튼을 누르셨습니다');
//   }
// );

/** 함수 표현식 vs 함수 선언문 */
// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 함수 표현식
let sum2 = function (a, b) {
  return a + b;
};

/* 함수 선언문은 함수 선언문이 스크립트상 정의되기 전에도 호출할 수 있다 */
sayHi3('John');

function sayHi3(name) {
  console.log(`Hello, ${name}`);
}

/* 함수 선언문의 스코프는 코드블럭 내부에 한정! 하지만 그 안에서는 호출의 위치가 자유롭다! */
let age = prompt('How old are you?');

if (age < 19) {
  function welcome() {
    console.log('Hi!');
  }
} else {
  function welcome() {
    console.log('');
  }
}
