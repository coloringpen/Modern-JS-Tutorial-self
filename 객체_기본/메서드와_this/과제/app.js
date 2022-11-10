'use strict';

/** 객체 리터럴에서 'this' 사용하기 */
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser(); // 이 함 수를 호출했을 때, 그 어떤 객체의 메서드로도 호출되지 않았음!! 그러므로 this값이 없다!!
/* this값을 설정할 땐 객체 정의가 사용되지 않는다
this값은 호출 시점에 결정된다!!! */
// makeUser()로 생성된 this는 undefined가 된다.
// 메서드로 호출된 게 아니라, 함수로써 호출되었기 때문

// console.log(user.ref.name);
// Cannot read properties of undefined (reading 'name')
//  at app.js:12:22

console.log(user);
// {name: 'John', ref: undefined}

function makeUser2() {
  return {
    name: 'John',
    ref() {
      return this;
    },
  };
}

let user2 = makeUser2();
console.log(user2.ref().name);
// 이때는 호출 시점에서 this가 결정될 수 있음!
// ref가 실행되며, 해당 메서드가 특정 객체에 바인딩 되기 때문에!
// this를 적용시키기 위해선, 호출이 될 때 특정 객체의 메서드로서 등록되고,
// 그 객체에 묶여서 실행되도록 한다. 그래야 this가 결정된다.
// this는 메서드가 '호출'될 때의 점 앞의 객체!

/** 계산기 만들기 */
/*let calculator = {
  read() {
    this.a = Number(prompt('first number to calculate'));
    this.b = Number(prompt('second number to calculate'));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum()); // sum()될때, this에 calculator 할당
console.log(calculator.mul()); // mul()될때, ""*/

/** 체이닝 */
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();

ladder.up().up().down().showStep();
// this가 결정될 수 있는 객체에 연결될 수 있게 만들기
