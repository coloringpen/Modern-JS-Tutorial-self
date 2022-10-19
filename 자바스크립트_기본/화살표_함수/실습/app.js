/** 화살표 함수 기본 */
// syntax
let func = (arg) => 'expression';

let func1 = function (arf) {
  return 'expression';
}; // 이런 내용의 축약버전

let sum = (a, b) => a + b;

let sum1 = function (a, b) {
  return a + b;
}; // 이런 함수의 축약버전

console.log(func());
console.log(func1());
console.log(sum(1, 2));
console.log(sum1(1, 2));

// 인수가 하나밖에 없다면 괄호 생략 가능
let double = (n) => n * 2;
let double1 = function (n) {
  return n * 2;
}; // 이 함수의 축약버전

console.log(double(2));
console.log(double1(2));

// 인수가 없다면 빈괄호 쓰기
let sayHi = () => console.log('Welcome');
let sayHi1 = function () {
  return console.log('Welcome');
};

console.log(sayHi()); // console.log의 반환값은 없으므로 console.log()의 결과를 console.log()하면
console.log(sayHi1()); // undefined 나옴. return 뒤에 오는 애들의 생김새와 상관없이 값은 무엇인가를 생각하기.

/* 함수 표현식같이 사용 가능 */
let age = 19;

let welcome = age < 18 ? () => console.log('Hi') : () => console.log('Welcome');
welcome();

// 아래것과 같음
let welcome1 =
  age < 18
    ? function () {
        console.log('Hi');
      }
    : function () {
        console.log('Welcome');
      };

welcome1();

/* 본문이 여러줄인 화살표 함수 - 중괄호로 묶어주기, return 지시자 확실히 써주기 */
let sum3 = (a, b) => {
  let result = a + b;
  return result; // 반환값을 만들어준다는 건, 함수를 표현식 or 값처럼 쓸 수 있게 해준다는 것
};

console.log(sum3(1, 2));
