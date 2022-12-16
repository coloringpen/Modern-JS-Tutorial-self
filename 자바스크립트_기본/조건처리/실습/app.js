/** 'if'문 */
// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (+year == 2015) alert('정답 입니다!');

// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (+year == 2015) {
//   alert('정답입니다!');
//   alert('아주 똑똑하시네요!');
// }

/** 불린형으로의 변환 */
// if (0) {
//   console.log('is this working?');
// }

// if (1) {
//   console.log('is this working?');
// }

// let year = prompt('put number', '2015');
// let cond = year == 2015;

// if (cond) {
//   console.log('this is great');
// }

/* 'else'절 */
// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
// if (year == 2015) {
//   console.log('it is correct');
// } else {
//   console.log('it is wrong');
// }

/* 'else if'로 복수 조건 처리하기 */
// let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

// function guess() {
//   if (year < 2015) {
//     year = prompt('one more try! go up!', '');
//     guess();
//   } else if (year > 2015) {
//     year = prompt('one more try! go down!', '');
//     guess();
//   } else {
//     console.log('it is correct!');
//   }
// }

// guess();

/** 조건부 연산자 '?'*/
// let accessAllowed;
// let age = prompt('give me your age', '');

// if (age > 18) {
//   accessAllowed = true;
//   console.log(accessAllowed);
// } else {
//   accessAllowed = false;
//   console.log(accessAllowed);
// }

// let age = prompt('tell me your age', '');
// let accessAllowed = age > 18 ? true : false;
// // let age = prompt('tell me your age', ''); // Cannot access 'age' before initialization
// console.log(accessAllowed);

// let age = prompt('tell me your age', 18);

// let message =
//   age < 3
//     ? 'hello baby!'
//     : age < 18
//     ? 'hello'
//     : age < 100
//     ? 'welcome'
//     : 'you are really old';
// console.log(message);

// let message = null;
// if (age < 3) {
//   message = 'hello baby';
// } else if (age < 18) {
//   message = 'hello';
// } else if (age < 100) {
//   message = 'welcome';
// } else {
//   message = 'you are very old';
// }9

// console.log(message);

/** 부적절한 '?' */

// let company = prompt('자바스크립트는 어떤 회사가 만들었을까요', '');
// company == 'Netscape' ? console.log('정답!') : console.log('오답!');
