/** 코드 블록 - 블록 외부에서 블록 내부에서 정의한 '변수'를 접근할 수 없다*/
{
  let message = 'hello';
  function hi(msg) {
    console.log(msg + 'you');
  }
  console.log(message);
}

// console.log(message); app.js:7 Uncaught ReferenceError: message is not defined
// hi('hi'); // 하지만 블록 내부에서 정의된 함수는 외부에서도 읽어올 수 있는듯?
// 엄격모드에서는 Uncaught ReferenceError: hi is not defined

function lol(champion) {
  function champs() {
    return 'do you know';
  }

  console.log(`${champs()}, ${champion}?`);
}

// console.log(champs()); 여기서는 또 champs를 읽어올 수 없구만
// let result = lol('lux'); 실행시킨 결과를 변수에 저장해두어도 안되는군.
// champs();

for (let i = 0; i < 8; i++) {
  function jet() {
    console.log('give me my jet');
  }
}

// jet(); 아니 이건 왜 또 됨?
// 결론 : 함수 속에 정의한 함수는 외부에서 읽을 수 없지만,
// 그 외의 블록에서는, 블록 내부에서 선언한 함수를
// 블록 외부에서 읽어올 수 있다!

/* 특정 작업을 하는 코드들을 따로따로 묶어두는 용도로 사용가능 */

{
  let message = 'hello';
  console.log(message);
}

{
  let message = 'bye bye';
  console.log(message);
}

// 블록이 없으면 에러 발생. let은 같은 이름의 변수를 재할당 할 순 있지만 재선언은 안됨
//Identifier 'message' has already been declared

/* if, for, while도 마찬가지. 각 지시자 옆에 있는 ()도 {}에 포함된 것으로 간주 */
if (true) {
  let phrase = 'Hello!';
  console.log(phrase);
}

// console.log(phrase); app.js:56 Uncaught ReferenceError: phrase is not defined

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); i is not defined

function test1(func) {
  console.log(func('good job') + ' and great');
}

test1(function you(word) {
  return 'you did ' + word;
});

// you('happy'); 인수로 넘어간 곳 밖에서는 define되지 않았다고 뜸

/** 중첩함수 - 함수 내부에서 선언한 함수 */
/* 코드를 정돈하는 데 사용 가능 */

function sayHiBye(firstName, lastName) {
  // helper 중첩함수
  function getFullName() {
    return firstName + ' ' + lastName;
  }

  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());
}

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

/** 렉시컬 환경 */
/* 단계1. 변수 */
// 렉시컬 환경 : 실행 중인 함수, 코드 블록, 스크립트 전체가 갖는 내부 숨김 연관 객체

/** garbage collection */
function f() {
  let value = 123;

  return function () {
    console.log(value);
  };
}

let g = f();

function f1() {
  let value = Math.random();

  return function () {
    console.log(value);
  };
}

let arr = [f(), f(), f()];

function f2() {
  let value = 123;

  return function () {
    console.log(value);
  };
}

let g1 = f(); // g1이, 즉 중첩함수가 살아있는 동안 연관 렉시컬 환경도 메모리에 살아있음
g1 = null; // 도달할 수 없는 상태. 이제 연관 렉시컬 환경들, f2의 렉시컬 환경도 메모리에서 삭제됨

/** 최적화 프로세스 */
function f3() {
  let value = Math.random();

  function g() {
    debugger; // Uncaught ReferenceError: value is not defined
    // 디버거로 여기에서 함수의 실행을 멈추고, console.log(value)를 추가
  }

  return g;
}

// let g2 = f3();
// g2();

// 아래 녀석들은 각각 la와 any를 디버깅 과정에서 콘솔에 찍어봤을때 undefined 에러가 난다
// let la = 'same name, different variable';

// function f4() {
//   let la = 'the closest varible';

//   function g() {
//     debugger;
//   }

//   return g;
// }

// // let g3 = f4();
// // g3();

// console.log(la);

let any = 3;

// function myTest() {
//   let any = 5;

//   function nest() {
//     debugger;
//   }

//   return nest;
// }

// let testNest = myTest();
// console.log(testNest);
// testNest();
