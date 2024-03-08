function solution(box, n) {
    var answer = box.map((el) => Math.floor(el / n)).reduce((pre, cur) => pre * cur)
    return answer;
}