'use strict';

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

/* 대괄호 표기법 안에서 문자열 사용 : 문자열을 따옴표로 묶어야한다 */
// 해당 표기가 문자열 '값'임을 표현하기 위해
// 따옴표로 묶지 않는 경우
//    유효한 변수 식별자 형태 : 변수를 찾으려 한다
//    유효한 변수 식별자 형태 x : 그냥 문자열로서 대함

let key = 'like birds';
user6[key] = true;
console.log(user6);

/* 런타임 평가 이후 확정된 key변수로 프로퍼티 키 이용하기 */
let user7 = {
  name: 'John',
  age: 36,
};

// let key2 = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');

// 변수로 접근
// console.log(user7[key2]);

let key3 = function () {
  const finalKey = 1 ? 'age' : 'lol';
  console.log(finalKey);
  return finalKey;
};

console.log(user7[key3()]);
// 대괄호 내부에는 어떤 표현식이든 쓸 수 있다

// 점표기법은 이를 이용할 수 없다. 무조건 객체 내부의 문자열 키만 읽어오는 방식
let user8 = {
  name: 'John',
  age: 30,
};

let key4 = 'name';
console.log(user8.key4); // undefined. user8 내부에는 key4라는 프로퍼티 키가 없으므로

/** 계산된 프로퍼티 - 리터럴 프로퍼티 표기에 바로 대괄호 사용하기 */
let fruit = 1 < 2 ? 'pear' : prompt('which fruit do you want to buy?', 'apple');

let bag = {
  [fruit]: 5, // 프로퍼티 키가 런타임에 할당되는 변수값에 따라 달라진다
  // 프로퍼티 이름이 동적으로 바뀌는 것. 정적이지 않음!
};

console.log(bag[fruit]); // 전에 사용하던 것처럼 이렇게 또 읽어올수도 있음
console.log(bag);

/* 아래와 동일 - 변수를 런타임에 받아온 이후, 객체 프로퍼티로 저장하기*/
let fruit2 =
  1 < 2 ? 'pear' : prompt('which fruit do you want to buy?', 'apple');

let bag2 = {};
bag2[fruit2] = 5;

console.log(bag2[fruit2]);
console.log(bag2);

/* 대괄호 내부에는 무슨 표현식이든 사용할 수 있다 */
let fruit3 = 'apple';
let bag3 = {
  [fruit3 + 'computers']: 5,
};

console.log(bag3);

/** 단축 프로퍼티 - 프로퍼티를 값을 기존변수에서 받아오기 */
/* 프로퍼티 이름과 값 = 변수이름(파라미터) */
function makeUser(name, age) {
  return {
    name: name, // name 변수값이 여기로 온다
    age: age, // age 변수값이 여기로 온다
  };
}

let user9 = makeUser('John', 30);
console.log(user9.name);

function makeUser2(name, age) {
  return {
    name, // 변수 name 자체가 프로퍼티화됨
    age, // 변수 age 자체가 프로퍼티화됨
  };
}

let user10 = makeUser2('John', 30);
console.log(user10.name);

/* 한 객체에서 일반 프로퍼티와 단축 프로퍼티 함께 사용도 가능 */
let user11 = {
  name, // name: name 과 같은
  age: 30,
};

/** 프로퍼티 이름의 제약사항*/
// 예약어를 키로 사용해도 괜찮다
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

// 그 어떤 '문자열', 심볼형 값도 프로퍼티 키가 될 수 있다
// 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형변환됨

let obj2 = {
  0: 'test',
};

console.log(obj2[0]);
console.log(obj2['0']);
