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
// 0은 유효한 변수명이 될 수 없으니 위에서 변수 이름으로 찾지 않고
// 바로 문자열 형변환되어 값을 조회함
console.log(obj2['0']);

// __proto__ 예외이름. 다른 메커니즘으로 움직이는 특수 프로퍼티 이름.
let obj3 = {};
obj.__proto__ = 5;
console.log(obj.__proto__); // 원시값을 할당했는데 객체가 나옴!

/** 'in' 연산자로 프로퍼티 존재 여부 확인하기 */
/* undefined 이용 */
let user13 = {};
console.log(user.noSuchProperty === undefined); // true

/* in 연산자 사용 */
let user12 = {
  name: 'John',
  age: 30,
  1: 12,
};

console.log('name' in user12);
console.log('age' in user12);
console.log(1 in user12); // 유효한 변수명이 아닌 경우, 따옴표 없이 검색해도 프로퍼티 지정 가능
console.log('blablabla' in user12); // false

/* in 연산자 사용 이유 */
let obj13 = {
  test: undefined,
};

console.log(obj.test); // undefined
console.log(obj13.test === undefined); // true 프로퍼티가 존재하지 않는 것처럼 나옴
console.log('test' in obj13); // true 이제 제대로 확인 가능

/** for...in 반복문 - 객체의 모든 키 순회하기*/
let user14 = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (let key in user14) {
  console.log(key);
  console.log(user14[key]);
}

/** 객체정렬방식 */
/* 정수 프로퍼티는 자동 정렬 */
let codes = {
  49: '독일',
  41: '스위스',
  44: '영국',
  1: '미국',
};

for (let code in codes) {
  console.log(codes[code]);
} // 미국 스위스 영국 독일 순으로 찍힘

/* 정수 프로퍼티 : 변형없이 정수에서 왔다갔다 할 수 있는 문자열 */
// 한번 문자열로 표현된 숫자를 숫자형으로 바꾸고
// 소수점 떼버리고
// 그걸 다시 문자열로 바꿨을 때 똑같은 숫자가 나와야함
console.log(String(Math.trunc(Number('49')))); // 정수 프로퍼티!
console.log(String(Math.trunc(Number('+49'))));
console.log(String(Math.trunc(Number('1.2'))));

/* 키가 정수가 아닌 경우, 작성된 숫서대로 프로퍼티 나열 */
let user15 = {
  name: 'John',
  surname: 'Smith',
};

user15.age = 25;

for (let prop in user15) {
  console.log(prop);
} // name surname age

/* 숫자 정렬 순서를 임의대로 지정하고 싶다면, 정수 프로퍼티가 되지 않게 처리 */
let codes1 = {
  '+49': '독일',
  '+41': '스위스',
  '+44': '영국',
  '+1': '미국',
};

for (let code in codes1) {
  console.log(codes1[code]);
} // 리터럴에 추가된 순서대로 '독일, 스위스, 영국, 미국' 출력
