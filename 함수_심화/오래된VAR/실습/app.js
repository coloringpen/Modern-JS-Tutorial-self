var message = '안녕하세요';
console.log(message);

// 'VAR'는 블록 스코프가 없습니다
if (true) {
  var test = true;
}

console.log(test);

if (true) {
  let test2 = true;
}

// console.log(test2); app.js:15 Uncaught ReferenceError: test2 is not defined
