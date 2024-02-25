function solution(n, k) {
    var answer = 0;
    let total = (12000 * n) + (2000 * k)
    if(n >= 10) {
        total = total - (Math.floor(n / 10) * 2000)
    }
    answer = total
    return answer;
}