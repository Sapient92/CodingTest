function solution(my_string) {
  var answer = "";
  const foo = my_string.split("");
  let result = [];
  for (let i = 1; i <= foo.length; i++) {
    result.push(foo[foo.length - i]);
  }
  answer = result.join("").toString();
  return answer;
}