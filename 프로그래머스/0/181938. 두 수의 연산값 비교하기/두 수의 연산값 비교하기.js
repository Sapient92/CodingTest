function solution(a, b) {
    var answer = 0;
    const x = Number(a.toString() + b.toString())
    const y = 2 * a * b
    answer = x > y ? x : x === y ? x : y
    return answer;
}