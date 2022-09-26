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

/** 일치 연산자 */
console.log(0 == false); // 동등연산자는 형이 다른 피연산자들을 비교할 때 숫자형으로 바꾸고 비교
console.log(1 == true);
console.log('' == false);

console.log(0 === false); // 일치 연산자는 형변환없이 값 비교

/** null이나 undefined와 비교하기 */
console.log(null === undefined);
console.log(null == undefined); // 숫자형으로 변환하면 0과 NaN이긴 하지만 예외처러
// null 또한 동등연산자로 비교할 땐 0으로 변환되는 값들과 같다고 나타나지 않음

/* null vs 0 */
console.log(null >= 0); // true
console.log(null == 0); // false 동등연산자 비교는 null과 undefined에서 예외!!
console.log(null > 0); // false

/* 비교가 불가능한 undefined */
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false
