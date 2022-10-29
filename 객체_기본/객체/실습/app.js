/** 객체 */
/* 만드는 방법 */
let user = new Object(); // '객체 생성자' 문법
let user1 = {}; // '객체 리터럴' 문법

/* 리터럴과 프로퍼티 */
let user2 = {
  name: 'John',
  age: 30,
};

console.log(user2);

/* 점표기법 사용하기 */
// 프로퍼티 값 얻기
console.log(user2.name);
console.log(user2.age);

// 프로퍼티 추가하기
user2.isAdmin = true;

// 프로퍼티 삭제하기
delete user2.age;

console.log(user2);

// 복수의 단어는 key로 만들때 따옴표로 묶기
let user3 = {
  name: 'John',
  age: 30,
  'like birds': true,
};

// 마지막 프로퍼티 끝은 쉼표로 끝날 수 있습니다 trailing comma
let user4 = {
  name: 'john',
  age: 30,
};

// 상수 객체는 수정될 수 있다
const user5 = {
  name: 'John',
};

user5.name = 'Pete';
console.log(user5.name);

/** 대괄호 표기법 - 키에 어떤 문자열이 있던지 상관없이 동작 */
// user5.likes birds = true 문법 에러
let user6 = {};

// set
user6['like birds'] = true;

// get
console.log(user6['like birds']);

// delete
delete user6['like birds'];
console.log(user6);

let key = 'like birds';
user6[key] = true;
console.log(user6);

/** dmdk.....*/
