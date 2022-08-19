// #빈객체를 만드는 방법 두 가지
let user = new Object();
// 객체 생성자 문법. new === 객체 새로 만든다!
// Object() 객체 생성자 함수. 주어진 값을 객체 래퍼로 만들어준다.

let user1 = {};
// 객체 리터럴 문법

console.log(user);
console.log(user1);

let user3 = {
  name: 'John', // 프로퍼티(key-value) 하나
  age: 30, // 프로퍼티(key-value) 둘
};

console.log(user3);
