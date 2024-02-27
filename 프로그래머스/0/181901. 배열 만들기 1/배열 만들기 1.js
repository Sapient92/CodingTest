function solution(n, k) {
    var answer = [];
    let el = k
    while(el <= n) {
        answer.push(el)
        el = el + k
    }
    return answer;
}