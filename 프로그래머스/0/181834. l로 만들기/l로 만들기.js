function solution(myString) {
  var answer = '';
  const reg = /[a-k]/g
  answer = myString.replaceAll(reg,"l")
  return answer;
}