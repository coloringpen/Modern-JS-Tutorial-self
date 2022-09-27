/* if와 문자열 0
if ('0') {
  alert('hello');
} // 조건이 true이므로 실행됨
*/

/* 자바스크립트의 공식이름
let theName = prompt('what is the "official" name if JavaScript?', '');
if (theName != 'ECMAScript') {
  alert("You don't know? 'ECMAScript!'");
} else {
  alert('You are right');
} */

/* 입력받은 숫자의 부호 표시하기
let theNum = prompt('give me a number', '');
if (theNum > 0) {
  console.log(1);
} else if (theNum < 0) {
  console.log(-1);
} else {
  console.log(0);
} */

/* 'if'를 '?'로 교체하기 
let a = prompt('give me a number', '');
let b = prompt('give me a number', '');
let result = +a + +b < 4 ? '미만' : '이상';
console.log(result); */

/* 'if..else'를 '?'로 교체하기 
let login = prompt('직원인가요, 임원인가요?', '');
let message =
  login == '직원'
    ? '안녕하세요'
    : login == '임원'
    ? '환영합니다'
    : login == ''
    ? '로그인이 필요합니다.'
    : '';
console.log(message); */
