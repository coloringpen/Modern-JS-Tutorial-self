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
function Calculator() {
  this.read = function () {};
  this.sum = function (a, b) {
    return a + b;
  };
  this.mul = function (a, b) {
    return a * b;
  };
}
const calculator1 = new Calculator();

console.log(calculator1.sum(1, 2));
