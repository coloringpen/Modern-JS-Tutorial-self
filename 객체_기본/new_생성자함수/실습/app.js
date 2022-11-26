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
