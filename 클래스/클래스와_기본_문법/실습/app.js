'use strict';

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// usage
let user = new User('John');
user.sayHi();

class User2 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// User2가 함수라는 증거
console.log(typeof User2); // function

class User3 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// 클래스는 함수이다
console.log(typeof User3); // function

// 정확히는 prototype 프로퍼티에 저장된 constructor가 된다
console.log(User3 === User3.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됨
console.log(User3.prototype.sayHi);
/*  ƒ sayHi() {
    console.log(this.name);
  } */

// 현재 User3 prototype 프로퍼티에 저장된 메서드는 총 두 개. 배열로 저장됨!
console.log(Object.getOwnPropertyNames(User3.prototype)); // [constructor, sayHi]

/** 클래스는 단순한 편의 문법이 아니다! */
// class User와 동일한 기능을 하는 순수 함수 만들기
// 1.  생성자 함수 만들기
function User4(name) {
  this.name = name;
}
// 모든 함수의 prototype은 'constructor' 프로퍼티를 기본으로 가짐

// 2. prototype에 메서드 추가
User4.prototype.sayHi = function () {
  console.log(this.name);
};

// 사용법:
let user4 = new User4('John');
user4.sayHi(); // John

// class와의 차이점 : [[IsClassConstructor]]: true로 발생
class User5 {
  constructor() {}
}

console.log(typeof User5); // User의 타입은 함수이긴 하지만 그냥 호출 불가
// User5(); Class constructor User5 cannot be invoked without 'new'

// 클래스 생성자를 문자열로 형변환 =>'class ...'
class User6 {
  constructor() {}
}

console.log(User6);
/* class User6 {
  constructor() {}
} */

/** 클래스 표현식 */
let User7 = class {
  sayHi() {
    console.log('Hello!');
  }
};

let User8 = class MyClass {
  // 클래스 표현식에서 이름 붙이면
  sayHi() {
    console.log(MyClass); // 이 이름은 오직 클래스 '내부'에서만 사용 가능
  }
};

new User8().sayHi(); // MyClass의 정의를 보여줌
// console.log(MyClass); Uncaught ReferenceError: MyClass is not defined

// 필요에 따라 동적으로 클래스 생성하기
function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// 새로운 클래스 만들기
let User9 = makeClass('Hi!!');
new User9().sayHi();

/** getter과 setter */
class User10 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log('the name is too short');
      return;
    }
    this._name = value;
  }
}

let user10 = new User10('Bora');
console.log(user10.name);
user10 = new User10(''); // 클래스를 생성하면서 name의 값이 세팅되므로 이때로 setter 실행됨

/** 계산된 메서드 이름[...] */
class User11 {
  ['say' + 'Hi']() {
    console.log('Hello');
  }
}

new User11().sayHi();

/** 클래스 필드 - 사용시, 어떤 종류의 프로퍼티도 클래스에 추가 가능 */
class User12 {
  name = 'Bora';

  sayHi() {
    console.log(`${this.name}님 안녕하세요!`);
  }
}

new User12().sayHi();

class User13 {
  name = 'Bora';
}

let user13 = new User13();
console.log(user13.name); // Bora
console.log(User13.prototype.name); // undefined

// class User14 {
//   name = prompt('tell me your name', 'Bora');
// }

// let user14 = new User14();
// console.log(user14.name);

/* 얘도 되는데?
class User14 {
  constructor() {
    this.name = prompt('tell me your name', 'Bora');
  }
} */

class User15 {
  constructor() {
    this.yo = 'yo';
    this.ha = 'ha';
  }
  name = 'Hihi';
  age = 18;
}

let user15 = new User15();
let keys15 = Object.keys(user15);

// 클래스 필드로 만든 인스턴스도 순회가 된다~!
// 클래스 필드의 내용부터 먼저 나오는듯

for (let i = 0; i < keys15.length; i++) {
  const key = keys15[i];
  const value = user15[key];
  console.log(value);
}

/** 클래스 필드로 바인딩 된 메서드 만들기 */
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
}

let button = new Button('Hi, hi!!');
setTimeout(button.click, 1000); // undefined

/* 클래스 필드를 사용하여 losing this 해결하기 */
class Button1 {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  };
}

let button1 = new Button1('HiHi hehe!!');
setTimeout(button1.click, 1000);
