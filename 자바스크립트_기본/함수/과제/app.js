/** else는 정말 필요한가? */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return '보호자의 동의를 받으셨나요?';
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  return '보호자의 동의를 받으셨나요?';
}

console.log(checkAge(17));
console.log(checkAge2(17));

function checkAge3(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log('보호자의 동의를 받으셨나요?');
  }
}

function checkAge4(age) {
  if (age > 18) {
    return true;
  }
  return console.log('보호자의 동의를 받으셨나요?');
}

checkAge3(17);
checkAge4(17);

/** '?'나 '||'를 사용하여 함수 다시 작성하기 */
function checkAge5(age) {
  let isAdult = age > 18 ? true : '보호자의 동의를 받으셨나요?';
  console.log(isAdult);
}

function checkAge6(age) {
  let isAdult = age > 18 || '보호자의 동의를 받으셨나요?';
  console.log(isAdult);
}

checkAge5(17);
checkAge5(19);
checkAge6(17);
checkAge6(19);

function checkAge7(age) {
  return age > 18 ? true : console.log('보호자의 동의를 받으셨나요?');
}

function checkAge8(age) {
  return age > 18 || console.log('보호자의 동의를 받으셨나요?');
}

checkAge7(17);
checkAge7(19);
checkAge8(17);
checkAge8(19);

/** min(a,b) 함수 만들기 */
function min(a, b) {
  //   if (a == b) return a; 없어도 됨
  let smaller = a < b ? a : b;
  return smaller;
}

// function showMin(a, b) {
//   if (isMin(a, b)) return isMin(a, b);
// } 출력용 굳이 나눌 필요 없음

console.log(min(8, 17) == 8);
console.log(min(2, 5) == 2);
console.log(min(3, -1) == -1);
console.log(min(1, 1) == 1);

/** pow(x,n) 함수 만들기 */
function pow(x, n) {
  if (n < 1) return console.log('n은 1 이상의 자연수여야 합니다');
  let pow = x ** n;
  return pow;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

function pow2(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    // result가 첫번째로 곱해진 결과나 마찬가지 이므로, i는 1부터 시작해야한다
    // result * x; 곱한 것이 다시 할당되도록 해야지..!!! 이렇게 연산한 것은 그냥 공중분해된다!!
    result *= x;
  }
  return result;
}

function showPow(x, n) {
  if (n < 1) return console.log(`${n}은 양의 정수여야 합니다`);
  console.log(pow2(x, n));
}

showPow(3, 2);
showPow(3, 3);
showPow(1, 100);
showPow(4, -3);
