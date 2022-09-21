/** 형 변환 */

/* 문자형으로 변환 */
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

/* 숫자형으로 변환 */
console.log('6' / '2');

let str = '123';
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

let age = Number('임의의 문자열 123');
console.log(age);

console.log(Number('   123  '));
console.log(Number('123z'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
