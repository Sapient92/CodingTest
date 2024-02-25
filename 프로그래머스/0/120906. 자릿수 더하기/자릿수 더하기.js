function solution(n) {
  var answer = [...n.toString()].reduce(
    (pre, cur) => parseInt(pre) + parseInt(cur)
  , 0);
  return answer;
}