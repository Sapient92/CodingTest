function solution(arr) {
    var answer = [];
    arr.map((el) => {for(let i = 0; i < el; i++) {
        answer.push(el)
    }})
    return answer;
}