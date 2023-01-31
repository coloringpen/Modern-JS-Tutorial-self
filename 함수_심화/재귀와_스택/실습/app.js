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

// 재귀적 순회
let company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 1600,
    },
  ],
  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],
    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // 더이상 나눌 수 없다면 salary를 더하거나
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      // 하위부서로 나누거나
      sum += sumSalaries(subdep); // 각 하위부서의 salary들을 총 합에 더함
    }
    return sum;
  }
}

console.log(sumSalaries(company));

/** 연결 리스트 - next와 value 프로퍼티를 조합하여 정의*/

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

let list2 = { value: 1 };
list2.next = { value: 2 };
list2.next.next = { value: 3 };
list2.next.next.next = { value: 4 };
list2.next.next.next.next = null;

console.log(list, 'original');
console.log(list2);

// 연결 리스트를 사용하면 전체 리스트를 여러부분으로 쉽게 나누고 합치기가 가능
let secondList = list.next.next;
list.next.next = null;

console.log(secondList, '미리 복사해둔 리스트의 일부');
console.log(list, '그 일부를 삭제한 리스트'); // 여기는 참고로 다시 합쳐진 상태의 리스트가 뜬다
// console.log도 비동기적으로 작동하는군

list.next.next = secondList;
// console.log(list, '다시 합친 리스트');

// 리스트 처음 객체 바꾸기 === 맨 앞에 새로운 값 추가, next에는 이전의 리스트 할당
let list3 = { value: 1 };
list3.next = { value: 2 };
list3.next.next = { value: 3 };
list3.next.next.next = { value: 4 };

list3 = { value: 'new item', next: list3 }; // 스스로를 재할당
console.log(list3);

// 중간 요소 제거 === 이전 요소의 next를 변경
list3.next = list3.next.next; // 1이 빠지게 됨
console.log(list3);
