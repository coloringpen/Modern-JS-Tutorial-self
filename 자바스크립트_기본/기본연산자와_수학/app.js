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

/* 단항 연산자 +와 숫자형으로의 변환 */
let onlyPlus1 = 1;
console.log(+onlyPlus1); // 1

let onlyPlus2 = -2;
console.log(+onlyPlus2); // -2

console.log(+true); // 1
console.log(+''); // 0

let apples = '2';
let oranges = '3';
console.log(apples + oranges); // 문자열 23
console.log(+apples + +oranges); // 숫자형 5. 단항 연산자 +가 이항연산자 +보다 우선순위가 높다

/* 할당 연산자 '=' ; 우선 순위가 낮아서 표현식에서 계산이 먼저 이루어지고 그 결과가 마지막으로 할당되는 이유*/
let equalIsNotEqual = 2 * 2 + 1;
console.log(equalIsNotEqual);

/* 값을 반환하는 할당 연산자; 할당 연산자는 할당된 값을 반환한다! */
let equal1 = 1;
let equal2 = 2;

let equal3 = 3 - (equal1 = equal2 + 1);

console.log(equal1);
console.log(equal3);

/* 할당 연산자 체이닝 */
let equal4, equal5, equal6;
equal4 = equal5 = equal6 = 2 + 2;
console.log(equal4);
console.log(equal5);
console.log(equal6);

equal4 = 3 + 3;
equal5 = equal4;
equal6 = equal5;
console.log(equal4);
console.log(equal5);
console.log(equal6);

/* 복합 할당 연산자; 변수에 연산자 적용, 그리고 그 결과를 같은 변수에 저장 */
let combi1 = 2;
combi1 = combi1 + 5;
combi1 = combi1 + 2;
console.log(combi1);

let combi2 = 2;
combi2 += 5;
combi2 *= 2;
console.log(combi2);

let combi3 = 2;
combi3 *= 3 + 5;
console.log(combi3);

/* 증가, 감소 연산자; 변수!에만 사용가능!! 값에 직접적 사용불가!!(에러남!!)*/
let counter = 2;
counter++;
console.log(counter);

let counter2 = 3;
counter2--;
console.log(counter2);

/* 전위형과 후위형의 반환값 차이 */
let counter3 = 1;
let counter3_1 = ++counter3;
// counter3에 1이 늘어나라고 명령한 것이므로,
// counter3도 1이 늘어나면서 변수 counter3_1이 동시에 할당된다는 것을 명심!!
console.log(counter3);
console.log(counter3_1);

let counter4 = 1;
let counter4_1 = counter4++;
console.log(counter4);
console.log(counter4_1); // 원래값을 남겨두고 싶을때 후위형 사용하기

let counter5 = 0;
counter5++;
++counter5;
console.log(counter5);

let counter6 = 0;
console.log(++counter6);

let counter7 = 0;
console.log(counter7);

let counter8 = 1;
console.log(2 * ++counter8);

let counter9 = 1;
console.log(2 * counter9++);

//웬만하면 코드 한줄엔 특정동작 하나만 작성하기!
let counter10 = 1;
console.log(2 * counter10);
counter10++;
console.log(counter10);

/* 쉼표 연산자; 마지막 표현식의 평가 결과만 반환! 우선순위 낮음(괄호 중요!)! */
let comma1 = (1 + 2, 3 + 4);
console.log(comma1);

// let comma2 = 1 + 2, 3 + 4 뜬금없이 나오는 7
// console.log(comma2) Error!Unexpected number

let num1 = null;
let num2 = null;
let num3 = null;

for (num1 = 1, num2 = 3, num3 = num1 * num2; num1 < 10; num1++) {
  console.log(num1);
  console.log(num2);
  console.log(num3); // 계속 3. num1이 변한대로 재할당이 일어나지 않는다. 쉼표 부분들은 num1 빼고 한 번 일어나고 끝인듯
}
