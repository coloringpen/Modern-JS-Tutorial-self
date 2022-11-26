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

/** new.target과 생성자함수 */
function Usertwo(name) {
  if (!new.target) {
    return new Usertwo(name);
  }
  this.name = name;
}

let bora = Usertwo('bora');
console.log(bora.name);
