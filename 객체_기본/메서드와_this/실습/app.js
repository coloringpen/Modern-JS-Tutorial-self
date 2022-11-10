'use strict';

/** 객체 - 실제 존재하는 개체를 표현 */
let user = {
  name: 'John',
  age: 30,
};

/** 메서드 - 객체에 할당된 함수/ 객체에게 행동할 수 있는 능력 부여 */
user.sayHi = function () {
  console.log('Hi!');
};

user.sayHi();

// 이미 선언된 함수를 메서드로 등록 가능
function sayHi2() {
  console.log('Hello!!');
}

user.sayHi2 = sayHi2;

user.sayHi2();

/** 메서드 단축 구문 */
user = {
  sayHi3: function () {
    console.log('hello!!!');
  },
};
// Uncaught TypeError: Assignment to constant variable.
// const로 선언한 객체를 리터럴로 다시 선언하면 안됨

user.sayHi3();

// 아예 새로 재할당 가능
user = {
  sayHi3() {
    // 프로퍼티 이름을 바로 함수 이름으로 하여 저장 가능. function 키워드 필요없음
    console.log('hello!!!');
  },
};

user.sayHi3();

/** 메서드와 this - '점 앞'의 this는 객체를 가리킴 */
let user2 = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(this.name);
  },
};

user2.sayHi(); // 실행되는 동안 this = user2

// this를 사용하지 안고 외부 변수를 참조해 객체에 접근하기
let user3 = {
  name: 'John',
  age: 30,
  sayHi() {
    console.log(user3.name);
  },
};

let admin = user3;
user3 = null;
// admin.sayHi();
// Uncaught TypeError: Cannot read properties of null (reading 'name')
//  at Object.sayHi (app.js:63:23)
//  at app.js:69:7

/** 자유로운 this - 모든 js함수에서 사용 가능 */
function sayHi4() {
  console.log(this.name);
}

let user4 = {
  name: 'John',
};

let admin2 = {
  name: 'Admin',
};

// 별개의 객체에서 동일한 함수 사용
// 메서드를 객체에 적용시켜 사용하려면, 일단 프로퍼티에 할당시키고 사용할 것
user4.f = sayHi4;
admin2.f = sayHi4;

user4.f();
admin2.f();
admin2['f'](); // 이렇게도 사용가능!

/** this가 없는 화살표 함수 */
// 화살표 함수는 평범한 외부 함수에서 this값을 가져온다
let user5 = {
  firstname: 'Violet',
  sayHi() {
    let arrow = () => {
      console.log(this.firstname);
    };
    arrow();
  },
};

user5.sayHi();
