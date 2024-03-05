function solution(num_list) {
    var answer = [0,0];
    num_list.map((el, i) =>
  i % 2 === 0 ? (answer[0] += el) : (answer[1] += el)
);
    return answer[0] > answer[1] ? answer[0] : answer[1]
}