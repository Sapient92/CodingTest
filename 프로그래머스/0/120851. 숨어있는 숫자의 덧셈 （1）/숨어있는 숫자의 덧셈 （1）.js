function solution(my_string) {
  var answer = 0;
  let arr = my_string.split("");

  const number = arr.filter((el) => !isNaN(el));
  const result = number.reduce((pre, cur) => parseInt(pre) + parseInt(cur), 0);
  answer = result;
  return answer;
}