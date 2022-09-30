/** nullish 병합 연산자 '?? 변수에 기본값을 할당하는 용도로 쓰일 수 있음! */
let a = 'apple';
let b = 'pear';
let x = a ?? b;

console.log(x);

x = a !== null && a !== undefined ? a : b; // x = a ?? b
console.log(x);

/* 익명의 사용자 */
let firstName = null;
let lastName = null;
let nickName = null;

console.log(firstName ?? lastName ?? nickName ?? 'unknown');
// 중요 포인트 : falsy value가 아닌, null인지 undefined인지 여부를 검사하는 것
// 만약 prompt로 변수값을 받을때, ''가 넘어오면 이건 그냥 falsy값이지 null이나 undefined는 아님

/** '??'와 '||'의 차이 */
//let hight = hight ?? 100; //Cannot access 'hight' before initialization
// 할달연산자의 연산순위가 낮으므로 요렇게 되는군

let hight;
hight = hight ?? 100;
console.log(hight);

let hight1 = 0;
console.log(hight1 ?? 100);
console.log(hight1 || 100);

/** 연산자 우선순위 : 5. 꽤 낮음 */
let hight2 = null;
let width2 = null;

let area = (hight2 ?? 100) * (width2 ?? 50);
console.log(area);

// 괄호 없으면 이래 되어버림
let area2 = hight2 ?? 100 * width2 ?? 50;
console.log(area2);
console.log(Number(width2));

// 안정성 이슈로 ??는 &&이나 ||와 함께 사용 불가
//let hihi = 1 && 2 ?? 3 //Uncaught SyntaxError: Unexpected token '??'

//제약을 피하려면 괄호 사용하기
let hihi = (1 && 2) ?? 3;
console.log(hihi);
