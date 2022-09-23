/* 전위형과 후위형 */
// let a = 1,
//   b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// console.log(c);
// console.log(d);

/* 할당 후 결과 예측하기 ; 할당 연산자도 연산자라는 것을 기억하기 */
// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a); // 4
// console.log(x); // 5

/* 형변환 */
// console.log('' + 1 + 0); // '10'
// console.log('' - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / '3'); // 2
// console.log('2' * '3'); // 6
// console.log(4 + 5 + 'px'); // '9px'
// console.log('$' + 4 + 5); //'$45'
// console.log('4' - 2); // 2
// console.log('4px' - 2); // NaN
// console.log(7 / 0); // NaN
// console.log('  -9  ' + 5); // '-95' !띄어쓰기! 정답: '  -9  5'
// console.log('  -9  ' - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(' \t \n' - 2);
// // NaN ! \t \n 는 공백을 만드는 문자들. 즉 뺄셈 앞의 문자들은 길이가 0인 문자열 취급. 즉 숫자 0으로 변환됨
// // 정답: -2

/* 덧셈 고치기 */
let a = prompt('덧셈할 첫번째 숫자를 입력해주세요.', 1);
let b = prompt('덧셈할 두번째 숫자를 입력해주세요.', 2);
alert(+a + +b);
// prompt로 넘어오는 것은 전부 문자열
// 이항 연산자 +는 피연산자로 문자열을 가질 수 있으며, 해당 피연산자들을 서로 병합한다
// 그러므로 문자열로 들어온 숫자들이 제대로 숫자 역할을 할 수 있도록
// 형변환을 시켜줘야한다.
alert(Number(a) + Number(b));
