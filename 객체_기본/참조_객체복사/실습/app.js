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
