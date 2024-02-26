function solution(n) {
    var answer = 0;
    if (n % 2 === 1) {
        for(let i = 1; i <= n; i = i+2) {
            answer += i
        }
    } else {
        for(let j = 2; j <= n; j = j+2) {
            answer += j**2 
        }
    }
    return answer;
}