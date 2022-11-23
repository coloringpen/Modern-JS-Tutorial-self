/** 생성자 함수 */
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Violet');

console.log(user.name);
console.log(user.isAdmin);
