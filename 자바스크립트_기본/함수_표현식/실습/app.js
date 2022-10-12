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
