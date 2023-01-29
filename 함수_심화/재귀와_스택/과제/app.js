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

/** 단일 연결 리스트 출력하기 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function prinListSelf(list) {
  if (list === null) {
    return;
  } else {
    console.log(list.value);
    prinListSelf(list.next);
  }
}

function printAnswerKey(list) {
  console.log(list.value);
  if (list.next) {
    // 자연히 next가 null이면 작동 안됨,, 완전 깔끔 멋짐,,
    printAnswerKey(list.next);
  }
}

function prinListFor(list) {
  // for of 사용하여 순회시, list은 not iterable이라고 뜸
  let next = list;
  while (next != null) {
    // 특정 조건에 따른 반복문은 while!! 기억하기!!
    console.log(next.value);
    next = next.next;
  }
}

/** 단일 연결 리스트를 역순으로 출력하기 */
/* function prinListSelf2(list) {
  // let reverseList = []; 여기에 넣으면!!! 재귀호출할때~~! 자꾸 여기 재실행돼서 배열 초기화됨!!
  console.log(list);
  if (list === null) {
    for (let i = reverseList.length; i >= 0; i--) {
      console.log(reverseList);
    }
  } else {
    reverseList.push(list.value);
    prinListSelf2(list.next);
  }

  // for (let i = reverseList.length; i >= 0; i--) { // 재귀할때 여기도 prinListself2의 일부가 되므로 의도한 것과는 다른 실행이 일어남
  //   console.log(reverseList[i - 1]);
  // }
}

prinListSelf2(list); 실패데스요,, */
