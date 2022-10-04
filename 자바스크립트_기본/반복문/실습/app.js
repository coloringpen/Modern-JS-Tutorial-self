/** 'while' 반복문 */
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let i2 = 3;
while (i2 != 0) {
  console.log(i2);
  i2--;
}

let i3 = 3;
while (i3) {
  console.log(i3);
  i3--;
}

/** 'do...while' 반복문 */
let i4 = 0;

do {
  console.log(i4);
  i4++;
} while (i < 3);

/** 'for' 반복문 */
for (let i = 0; i < 3; i++) {
  console.log(i);
}

/* 인라인 변수 선언 */
for (let i5 = 0; i5 < 3; i5++) {
  console.log(i5);
}
// console.log(i5); 반복문 안에서 선언한 변수는 반복문 내에서만 접근 가능

/* 인라인 변수 선언 대신, 외부에서 정의된 변수도 사용 가능 */
let i6 = 0;
for (i6 = 2; i6 < 6; i6++) {
  console.log(i6);
}

/** for문의 구성요소 생각해보기 */
/* begin의 생략 */
let i7 = 0;
for (; i7 < 3; i7++) {
  console.log(i7);
}

/* step의 생략 */
let i8 = 0;
for (; i8 < 4; ) {
  console.log(i8++);
}
// while ( i8 < 4 )나 마찬가지
// for(;;){} 으로 보든 구성요소 생략시 무한반복문 만들어짐 >> 당연히 조건문이 없으므로!

/** 반복문 빠져나오기 */
// let sum = 0;

// while (true) {
//   let value = +prompt('숫자를 입력하시오');
//   if (!value) break; // 사용자가 입력한 값이 없으면 멈춤
//   sum += value;
// }

// console.log(sum);

// let sum = 0;

// while (true) { // break를 하지 않는 이상 반복문
//   let value = +prompt('숫자 넣으쇼');
//   if (!value) break;
//   sum += value;
// }

// console.log(sum);
