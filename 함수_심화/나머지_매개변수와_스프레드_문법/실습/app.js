/** 나머지 매개변수 */
// 인수 개수에 제약은 없지만 정의된 파라미터의 값만 넘어옴
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

// 정의한 파라미터 이외의 나머지 매개변수들을 모아두기
function sumAll(...agrs) {
  let sum = 0;
  for (let arg of agrs) sum += arg;
  return sum;
}

console.log(sumAll(1, 2));
console.log(sumAll(1));
console.log(sumAll(1, 2, 3));
