/** 객체야 안녕? */
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
delete user.name;
console.log(user);

/** 객체가 비어있는지 확인하기 */
const schedule = {};

function isEmpty(obj) {
  for (let prop in obj) {
    // 프로퍼티가 없으면 반복문이 안굴러가는구만
    return false; // 그러니 반복문이 돌아가는 순간 return false
  }
  return true; // 안돌아가면 true
}

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));

const user1 = {
  1: 'happy',
  tired: true,
  favorite: 'study',
  pet: 'dog',
};

console.log(isEmpty(user1));

/** 변하지 않는 객체 */
const user2 = {
  name: 'John',
};

user2.name = 'Pete'; // 가능!!
// const는 한번이라도 값을 할당한 변수가 변경되는 걸 막음
// user2는 객체 참조 값을 저장. const는 즉 그 참조값이 변경되는 걸 막음

/** 프로퍼티 합계 구하기 */
const saleries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let prop in saleries) {
  sum += saleries[prop];
}

console.log(sum);

// function letsSum() {
//   sum = 0;
//   for (let prop in this) {
//     sum += this[prop];
//   }
//   this[sum];
// }

// saleries.letsSum;
// console.log(saleries.sum); this를 활용하는 법을 더 익히자,,

/** 프로퍼티 값 두 배로 부풀리기 */
const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') obj[prop] *= 2;
  }
}

multiplyNumeric(menu);
console.log(menu);
