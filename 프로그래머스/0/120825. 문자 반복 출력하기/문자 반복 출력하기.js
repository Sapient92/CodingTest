function solution(my_string, n) {
  var answer = my_string.split("").map((el) => el.repeat(n)).join("");
  return answer
}