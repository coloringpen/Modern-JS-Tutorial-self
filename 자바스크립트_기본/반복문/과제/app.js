/** 반복문의 마지막 값 : 1 */
let i = 3;
while (i) {
  // 조건은 괄호 안의 표현식이 falsy가 되었을 때 동작을 멈춘다
  console.log(i);
  i--;
}

/** while 반복문의 출력값 예상하기 */
let i2 = 0;
while (++i2 < 5) {
  console.log(i2);
} // 1, 2, 3, 4

while (i2++ < 5) {
  console.log(i2);
} // 얘는 앞의 반복문의 움직임으로 i2값이 이 반복문이 작동할 수 없게 변형됐으므로
// 안굴러감

let i3 = 0;
while (i3++ < 5) {
  // 여기선 i3++의 반환값이 사용되고
  console.log(i3); // 여기선 i3이 사용된다
} // 1, 2, 3, 4, 5
// i3++와 i3은 별개라는 것을 항상 기억하기

/** 'for'반복문의 출력값 예상하기 */
for (let i = 0; i < 5; i++) {
  console.log(i);
} // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) {
  console.log(i);
} // 0, 1, 2, 3, 4
// 증가 연산자가 반환하는 값은 조건체크에서 사용되지 않기 때문에
// 본문이 굴러가는 것과 상관없음

/** for반복문을 이용하여 짝수 출력하기 */
for (let i = 1; i < 10; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

/** 'for'반복문을 'while'반복문으로 바꾸기 */
let i4 = 0;
while (i4 < 3) {
  // 조건문에서 ++i4 사용시, 0이 안나오고 i4++사용시 0도 나오는 데다, 3까지 나와버리므로 둘다 여기서 못씀
  console.log(`number ${i4}!`);
  i4++;
}

/** 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기 */
// outer: while (true) {
//   let input = prompt('give me a number');
//   if (input <= 100) {
//     continue outer;
//   } else {
//     break;
//   }
// }

// let num;
// do {
//   num = prompt('give me a number over 100');
// } while (num <= 100 && num); // 유효한 num이어야 하는 동시에 100보다 작을 땐 항상 돌리기
// 항상 조건을 위주로 생각하는 버릇 들이기

/** 소수 출력하기 */
let ranNum = prompt('give me any number');
outer2: for (let i = 2; i < ranNum; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue outer2;
  }
  console.log(i);
}
