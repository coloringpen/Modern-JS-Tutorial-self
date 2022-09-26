/** 'if'문 */
// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (+year == 2015) alert('정답 입니다!');

// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (+year == 2015) {
//   alert('정답입니다!');
//   alert('아주 똑똑하시네요!');
// }

/** 불린형으로의 변환 */
if (0) {
  console.log('is this working?');
}

if (1) {
  console.log('is this working?');
}

let year = prompt('put number', '2015');
let cond = +year == 2015;

if (cond) {
  console.log('this is great');
}
