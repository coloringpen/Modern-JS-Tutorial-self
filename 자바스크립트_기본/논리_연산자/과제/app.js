/* 다음 OR연산의 결과 */
console.log(null || 2 || undefined); //2

/* OR연산자의 피연산자가 alert라면? 
alert(alert(1) || 2 || alert(3));
// 일단 처음 연산의 시작, 딱 보이는 alert(2)가 나오고, 첫번째 truthy값인 2가 나온 이후
// 연산이 끝나기 때문에 alert(3)은 발생되지 않는다
// alert 메서드는 값을 반환하지 않는다! 즉 undefined반환!!
// 반환값이 없는 함수는 undefined 즉 정의되지 않는 값을 반환한다!!
// 즉 반환값이 없는 함수들을 실행한 결과는 falsy값을 가진다.

console.log(console.log(1) || 2 || console.log(3));
// 얘도 마찬가지. 항상 순서대로, 보이는 것부터 처리한다는 것을 기억하고
// 연산이 언제 멈추는지 생각할 것
*/
console.log(Boolean(console.log(1)) && 3); // 1, false
console.log(console.log(1) && 3); // 1, undefined 일단 만난 것들은 다 출력한다는 것을 기억

/* 다음 AND 연산의 결과 
alert(1 && null && 2); //null
*/

/* AND연산자의 피연산자가 alert라면?
alert(alert(1) && alert(2)); // 1과 undefined. 논리 연산자의 반환값 기억하기
*/

/* OR AND OR 연산자로 구성된 표현식
alert(null || (2 && 3) || 4); // 3. &&는 ||보다 연산의 우선순위가 높다
*/

/* 사이 범위 확인하기
function howOld() {
  let age = prompt('나이가 어떻게 되시나요?');
  if (age >= 14 && age <= 90) {
    return 'you are included';
  } else {
    return 'you are not included';
  }
}

console.log(howOld());
*/

/* 바깥 범위 확인하기 
function outAge() {
  let age = prompt('나이가 어떻게 되시나요?');
  console.log(age);
  if (age < 14 || age > 90) {
    return 'you are not included';
  } else {
    return 'you are included';
  }
}

console.log(outAge());


let age = prompt('나이가 어떻게 되시나요');

function outAge1(age) {
  if (!(age >= 14 && age <= 90)) {
    return 'you are not included';
  } else {
    return 'you are included';
  }
}

console.log(outAge1(age));
*/

/* "if"에 관한 고찰
//아래 표현식에선 어떤 alert가 실행될까?
if (-1 || 0) alert('first'); // working
if (-1 && 0) alert('seconde'); // not working
if (null || (-1 && 1)) alert('third'); // working
*/

/* 로그인 구현하기
let Admin = prompt("who's there?");

function login(admin) {
  if (admin) {
    if (admin == 'Admin') {
      let password = prompt('Password?');
      if (password) {
        if (password == 'TheMaster') {
          alert('Welcome');
        } else {
          alert('Wrong password');
        }
      } else {
        alert('Canceled');
      }
    } else {
      alert("I don't know you");
    }
  } else {
    alert('Canceled');
  }
}

login(Admin);
*/

/*
let userName = prompt("Who's there?");

function login2(username) {
  if (username == 'Admin') {
    let password = prompt('Password?');
    if (password == 'TheMaster') {
      alert('Welcome!');
    } else if (password == null || password == '') {
      alert('Canceled!');
    } else {
      alert('Wrong password!');
    }
  } else if (username == null || username == '') {
    alert('Canceled!');
  } else {
    alert("I don't know you");
  }
}

login2(userName);
*/
