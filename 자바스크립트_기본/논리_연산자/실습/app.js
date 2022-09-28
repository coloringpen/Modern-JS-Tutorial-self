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

/* if문과 AND 연산자 함께 활용 */
let hourAnd = 12;
let minuteAnd = 30;

if (hourAnd == 12 && minuteAnd == 30) {
  console.log('현재 시각은 12시 30분 입니다!');
}

if (1 && 0) {
  console.log('if문에 falsy가 있으므로 여기는 실행되지 않는다');
}

/* 첫번째 falsy를 찾는 AND연산자 '&&' */
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && '아무거나 와도 상관 없슈');
console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

/* &&의 우선순위는 ||보다 높다! */
let aAnd = 1;
let bAnd = 2;
let cAnd = 3;
let dAnd = 4;
console.log(
  ((aAnd && bAnd) || (cAnd && dAnd)) == ((aAnd && bAnd) || (cAnd && dAnd))
); /* 원래 앞쪽은 괄호 안 넣어도 됐음...*/

/* 결과는 같아도 코드의 의도를 위해 if문 대신 ||나 &&를 쓰진 말기 */
let x = 1;
x > 0 && console.log('0보다 큽니다');

if (x > 0) {
  console.log('0보다 큽니다!');
}

/** !(NOT) 해당 연산은 항상 불린형을 반환한다! */
let valueNot = 3;
let resultNot = !valueNot;
console.log(resultNot);

console.log(!true);
console.log(!0);

/* !!은 해당 값을 불린형으로 변환 */
console.log(!!'not empty string');
console.log(!!null);
// Boolean()과 같은 효과
console.log(Boolean('not empty string'));
console.log(Boolean(null));
