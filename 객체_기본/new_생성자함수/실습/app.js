'use strict';

/** 생성자 함수 */
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Violet');

console.log(user.name);
console.log(user.isAdmin);

/* 아래와 동일 */
let user1 = {
  name: 'Violet',
  isAdmin: false,
};

console.log(user1.name);
console.log(user1.isAdmin);

/** new.target과 생성자함수 - new.target은 new없이 호출되면 undefined, 아니면 함수 자체 반환*/
function Usertwo(name) {
  if (!new.target) {
    return new Usertwo(name);
  }
  this.name = name;
  console.log(new.target); // 어짜피 new를 붙인것처럼 호출되므로 함수 반환함
  // 위의 if문이 없다면, 아래 bora에 저장되는 객체 없음. new없이 호출되므로
  // 그리고 console.log(new.target)도 undefined 반환
}

let bora = Usertwo('bora');
console.log(bora.name);

/** 생성자 return문 */
function BigUser() {
  this.name = 'monkey';
  return { name: '고질라' };
}

console.log(new BigUser().name);

function SmallUser() {
  this.name = 'monkey';
  return;
}

console.log(new SmallUser().name);

/** 좋은 문법은 아니지만 ()생략하고 호출가능 */
let user2 = new User();
let user3 = new User();

console.log(user2);
console.log(user3);

/** 생성자 내 메서드 */
function User3(name) {
  this.name = name;
  this.sayHi = function () {
    console.log('My name is ' + this.name);
  };
}

let Bora = new User3('Bora Lee');
Bora.sayHi();
