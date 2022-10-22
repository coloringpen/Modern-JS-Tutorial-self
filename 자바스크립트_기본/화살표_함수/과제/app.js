/** 화살표 함수로 변경하기 */
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

const ask1 = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  'Do you agree?',
  () => {
    console.log('you agreed');
  },
  () => {
    console.log("you didn't agree");
  }
);
