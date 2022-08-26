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

//delete

delete user6['like birds'];
console.log(user6);

user6[123] = 'this is the key name';
console.log(user6);

// user6[blue] = 'this is color blue';
// console.log(user6); error! blue is not defined at ...
// blue는 유효한 변수이름인데, 그래서 변수로 읽었는데 정의가 안돼있음!!
// 그러므로 blue가 변수로 읽히지 않고 그대로 키값으로 들어가길 바란다면
// 문자열로 표기를 해줘야함

user6.name = 'John';
user6.age = 30;

// let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');

// console.log(user6[key]);

// let key_1 = 'name';
// console.log(user.key); not error but undefined

// let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');
// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.pear); 이렇게 다른 과일의 이름을 찾을 경우 error는 안나지만
// undefined라고 뜸. 정의 되지 않은 것들을 사용하려고 할 때는 항상 undefined
// 정의되지 않은 것들은 유효한 변수 이름은 맞지만 어디 저장해둔 게 아닐 때에

// let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'peach');
// let bag = {};

// bag[fruit] = 5;
// console.log(bag[fruit]);

// 대괄호를 이용한 좀 더 복잡한 표현식을 사용
let fruit = 'apple';
let bag = {
  [fruit + 'computers']: 5,
};

/** 단축 프로퍼티 */
/* 사용할 수 있는 경우 :  변수이름 = 프로퍼티 키 = 프로퍼티 값 */
// console.log(bag);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user7 = makeUser('John', 30);
// console.log(user7.name);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user8 = makeUser('helen', 26);
console.log(user8);

// let user9 = { name name:name과 같음, age: 30 };

let user10 = {
  name,
  age: 30,
};

console.log(user10);
// 단축 프로퍼티와 일반 프로퍼티 함께 쓰는 것도 가능

let user11 = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(user11.for + user11.let + user11.return);
// 프로퍼티 이름은 예약어로도 가능. 문자형과 심볼형이라면 어떤것으로도 가능

let obj = {
  0: 'test',
};

console.log(obj['0']);
console.log(obj[0]);
// property names with other data types turn into String

let obj1 = {};
obj1.__proto__ = 5;
console.log(obj1.__proto__);
// ignores primitive data type defining

let user12 = {};
console.log(user12.noSuchProperty === undefined);
