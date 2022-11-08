/** 객체가 할당된 변수 복사 === 객체의 '참조값(바라보는 곳)' 복사. 바라보는 대상 자체를 복사하는 게 아님 */
let user = { name: 'John' };
let admin = user;
/** user와 admin은 같은 곳을 바라보게 됨 */

admin.name = 'Pete';
console.log(user.name);

/** 참조에 의한 비교 */
/* 객체 비교시 ==와 ===는 동일하게 동작 */
/* 두 객체는 동일한 객체여야(참조값이 같아야) true 반환*/
let a = {};
let b = a;
console.log(a == b); //true
console.log(a === b); //true

let a1 = {};
let b1 = {};
console.log(a1 == b1); //false
console.log(a1 === b1); //false

/** 객체 복사, 병함과 Object.assign */
/* 기존에 있던 객체와 내용은 똑같지만 독립적인 객체 만들기 */
// 순회해서 만들기
let user2 = {
  name: 'John',
  age: 30,
};

let clone2 = {};

for (let key in user2) {
  clone2[key] = user2[key];
}

console.log(user2);
console.log(clone2);

clone2.name = 'Pete';

console.log(user2.name);
console.log(clone2.name);

// Object.assign 활용
// 병합해보기
let user3 = { name: 'John' };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user3, permission1, permission2);
console.log(user3);

// 목표 객체에 동일한 프로퍼티가 있다면, 기존값이 덮어씌워짐
let user4 = { name: 'John' };
Object.assign(user4, { name: 'Pete' });
console.log(user4.name);

// 반복문 없이 간단히 객체 복사 가능
let user5 = {
  name: 'John',
  age: 30,
};

let clone5 = Object.assign({}, user5);
// returns the modified target object.
console.log(clone5);

/** 중첩객체 복사 */
/* 프로퍼티가 다른 객체에 대한 참조값인 경우 */
let user6 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user6.sizes.height);
// 객체를 할당한 프로퍼티 복사 >> 객체 참조값만 복사하게 됨 >> 객체 내용 복사X

let clone6 = Object.assign({}, user6);
console.log(user6.sizes === clone6.sizes);
// Object.assign은 프로퍼티 복사
// 그러므로 user6.sizes와 clone6.sizes는 같은 객체를 가리키게 됨
user6.sizes.width++;
console.log(clone6.sizes.width); // 51

// 직접 구현해보는 깊은 복사
let clone7 = {};
for (let key in user6) {
  if (typeof key === 'object') {
    for (let inKey in key) {
      clone7[key] = {};
      clone7[key][inKey] = key[inKey];
    }
  } else {
    clone7[key] = user6[key];
  }
}

console.log(clone7);
