function solution(a, b) {
    var answer = 0;
    const x = Number((a+"") + (b+""));
    const y = Number((b+"") + (a+""));
    answer = x < y ? y : x
    return answer;
}