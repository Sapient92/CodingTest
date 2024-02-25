function solution(s1, s2) {
    var answer = 0;
    const result = s1.filter((el) => s2.includes(el))
    answer = result.length
    return answer;
}