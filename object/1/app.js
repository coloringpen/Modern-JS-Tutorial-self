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

// #프로퍼티를 읽고, 추가하고, 삭제하기
// 일단 읽어내야(지정한 것을 집어낼 줄 알아야) 추가와 삭제 가능
console.log(user3.name);
console.log(user3.age);

// adding properties

user3.isAdmin = true;
user3.gender = 'Male';
console.log(user3);

// deleting properties

delete user3.gender;
delete user3.isAdmin;
console.log(user3);

// 'keys' with multiple words >> wrap around with quotation marks.
// make sure that they are "strings"
let user4 = {
  name: 'Helen',
  age: 31,
  'likes birds': true,
};

// objects declared with const can be updated since they just save
// the reference of the object

const user5 = {
  name: 'Lion',
};
user5.name = 'Tiger';
console.log(user5.name);

// keys made of multiple words cannot be read with dot method
// console.log(user4."likes birds") error : unexpected string

// square bracket notation
let user6 = {};

//set
user6['like birds'] = true;

//get
console.log(user6['like birds']);
