// 재귀 : 함수 내부에서 함수를 호출하는 경우 중, 함수가 자기자신을 호출하는 경우

/** 두 가지 사고방식 */
/* 1. 반복적인 사고 */
function pow2(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/* 2. 재귀적인 사고 */
function pow(x, n) {
  // pow는 n==1이 될때까지 재귀적으로 자신을 호출
  if (n == 1) {
    // 명확한 결괏값을 즉시 도출. 재귀의 base
    return x;
  } else {
    return x * pow(x, n - 1); // 재귀단계
  }
}

// 조건부 연산자 ? 사용가능
function pow2(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
