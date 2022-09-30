/** nullish 병합 연산자 '?? */
let a = 'apple';
let b = 'pear';
let x = a ?? b;

console.log(x);

x = a !== null && a !== undefined ? a : b; // x = a ?? b
console.log(x);
