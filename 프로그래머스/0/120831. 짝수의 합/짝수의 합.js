function solution(n) {
    var answer = 0;
    for(let i = 0; 2*i <= n; i++ ){
        answer += 2*i
    }
    
    return answer;
}