/** 주어진 숫자까지의 모든 숫자 더하기 */
// for 반복문 사용
function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += n - i;
  }
  return sum;
}

// 재귀 사용하기 : 재귀호출을 통해 반복문 없이 반복문을 만드는 느낌
function sumTo2(n) {
  if (n == 1) {
    return 1;
  } else if (n > 1) {
    // let sum = 0;
    // sum += n + sumTo2(n - 1);
    return n + sumTo2(n - 1); // 어짜피 sumTo2의 자리에 남는 값들을 생각해보면 굳이 변수 정의 안해도 됨
  } else {
    return;
  }
}

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

/** 팩토리얼 계산하기 */
function factorial(n) {
  //   if (n == 1) {
  //     return 1;
  //   } else {
  //     return n * factorial(n - 1);
  //   }
  return n != 1 ? n * factorial(n - 1) : n;
}

/** 피보나치 수 계산하기 */
function fib1(n) {
  //   return n != 1 ? fib(n - 1) + fib(n - 2) : n; 안됨
  return n <= 1 ? n : fib1(n - 1) + fib1(n - 2);
}

function fib2(n) {
  let first = 0;
  let second = 0;
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      second += i;
    } else {
      let lastFirst = first; // 미리 이전의 첫번째값 저장하고
      first = second; // 이제 첫번째값에는 이전의 두번째값이 새로 들어가고
      second = first + lastFirst; // 두번째값과 첫번째값이 새로운 second값으로 들어간다
    }
  }
  return second;
}

//t