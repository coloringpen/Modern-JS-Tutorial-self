/** ||(OR) */
// let result;

// let a = prompt('true or false', '');
// let b = prompt('true or false', '');

// result = Boolean(a) || Boolean(b);
// console.log(result);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

if (1 || 0) {
  // if(true||false)와 동일하게 작용. ||자체는 1반환 하지만 ()가 불린형으로 다시 반환
  console.log('truthy!');
}
console.log(1 || 0);

// let hour = 9;
// if (hour < 10 || hour > 18) {
//   console.log('영업시간이 아님!');
// }

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  console.log('영업시간이 아닙니다.');
}

console.log('like' || 'ho'); // 항상 첫번째 truthy값 반환!

console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);

let value1 = 'here';
let value2 = 'is';
let value3 = 'my money';
let theValue = value1 || value2 || value3;
console.log(theValue);

let firstName = '';
let lastName = '';
let nickName = 'Violet';
console.log(firstName || lastName || nickName || '익명');

true || console.log('not printed');
false || console.log('printed'); // false에서 연산이 딱 멈추기 때문에 console.log까지 안가는 것

console.log('hihi') || true; // console.log자체도 truthy로 변환될 수 있는건가?
console.log(Boolean(console.log('hihi')));
// false. 위도 truthy는 아니지만 일단 연산 순서에 따라 console.log가 실행되는거군...
// 연산을 할 때는 딱! 하나씩만 바라본다!!

/** &&(AND) */
let and1 = true;
let and2 = true;
let resultAnd = and1 && and2;
console.log(resultAnd);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
