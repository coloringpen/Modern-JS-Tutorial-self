/** 코드 블록 - 블록 외부에서 블록 내부에서 정의한 '변수'를 접근할 수 없다*/
{
  let message = 'hello';
  function hi(msg) {
    console.log(msg + 'you');
  }
  console.log(message);
}

// console.log(message); app.js:7 Uncaught ReferenceError: message is not defined
hi('hi'); // 하지만 블록 내부에서 정의된 함수는 외부에서도 읽어올 수 있는듯?

function lol(champion) {
  function champs() {
    return 'do you know';
  }

  console.log(`${champs()}, ${champion}?`);
}

// console.log(champs()); 여기서는 또 champs를 읽어올 수 없구만
// let result = lol('lux'); 실행시킨 결과를 변수에 저장해두어도 안되는군.
// champs();

for (let i = 0; i < 8; i++) {
  function jet() {
    console.log('give me my jet');
  }
}

// jet(); 아니 이건 왜 또 됨?
// 결론 : 함수 속에 정의한 함수는 외부에서 읽을 수 없지만,
// 그 외의 블록에서는, 블록 내부에서 선언한 함수를
// 블록 외부에서 읽어올 수 있다!

/* 특정 작업을 하는 코드들을 따로따로 묶어두는 용도로 사용가능 */

{
  let message = 'hello';
  console.log(message);
}

{
  let message = 'bye bye';
  console.log(message);
}

// 블록이 없으면 에러 발생. let은 같은 이름의 변수를 재할당 할 순 있지만 재선언은 안됨
//Identifier 'message' has already been declared

/* if, for, while도 마찬가지. 각 지시자 옆에 있는 ()도 {}에 포함된 것으로 간주 */
if (true) {
  let phrase = 'Hello!';
  console.log(phrase);
}

// console.log(phrase); app.js:56 Uncaught ReferenceError: phrase is not defined

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); i is not defined

/** 중첩함수 - 함수 내부에서 선언한 함수 */
