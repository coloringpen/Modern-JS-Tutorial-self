/* 단항 연산자 */
let x = 1;
x = -1;
console.log(x);

/* 이항 연산자 */
let y = 1;
let z = 3;
console.log(z - y);

/* 나머지 연산자 % */
console.log(5 % 2);
console.log(8 % 3);

/* 거듭제곱 연산자 */
console.log(4 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

/* 이항 연산자 '+'와 문자열 연결 */
let s = 'my' + 'string';
console.log(s); // mystring

console.log('1' + 2);
console.log(2 + '1');
console.log(2 + 2 + '1');
// 2 + 2까지는 아직 문자열을 만나기 전이므로 수학연산. 문자열을 만나는 시점에 이전의 숫자가 문자열로 변환됨

/* '+' 외의 다른 산술 연산자가 문자형 피연산자를 다루는 모습 ; 전부 숫자형으로 변함 */
console.log(6 - '2'); // 4 숫자형 결과
console.log('6' / '2'); // 3
