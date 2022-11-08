/** 객체가 할당된 변수 복사 === 객체의 '참조값(바라보는 곳)' 복사. 바라보는 대상 자체를 복사하는 게 아님 */
let user = { name: 'John' };
let admin = user;
/** user와 admin은 같은 곳을 바라보게 됨 */

admin.name = 'Pete';
console.log(user.name);
