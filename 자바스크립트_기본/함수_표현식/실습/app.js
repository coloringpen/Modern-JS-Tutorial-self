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
