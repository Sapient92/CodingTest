function solution(array) {
    var answer = []
    const compare = array.reduce((pre, cur) => pre > cur ? pre : cur)
    answer.push(compare, array.indexOf(compare))
    return answer;
}