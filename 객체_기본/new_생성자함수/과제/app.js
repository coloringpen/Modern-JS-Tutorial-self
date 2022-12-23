/** 함수 두 개로 동일한 객체 만들기 */
let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() == new B());

/** 계산기 만들기 */
