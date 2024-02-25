function solution(n) {
  var answer = 0;
  let twins = [];
  for (let i = 1; i <= n; i++) {
    if (i * parseInt(n / i) === n) {
      twins.push([i, parseInt(n / i)]);
    }
  }
  answer = twins.length;
  return answer;
}