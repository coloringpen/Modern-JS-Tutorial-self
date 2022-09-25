/** 불린형 반환 */
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

/* 반환된 불린값을 변수에 할당하기 */
let result = 5 > 4;
console.log(result);

/**문자열 비교 */
console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');

/**다른 형을 가진 값 간의 비교 */
console.log('2' > 1);
console.log('01' == 1); // true
console.log(true == 1);
console.log(false == 0);

/* 동등비교시 true반환. 하지만 논리평가 시, 하나는 true, 하나는 false 반환 */
let hmm = 0;
console.log(Boolean(hmm));

let hmm2 = '0';
console.log(Boolean(hmm2));

console.log(hmm == hmm2);
// 변환 기준이 다른 것들을 잘 구별할 것!
