function solution(n_str) {
    var answer = '';
    for(let i = 0; i < n_str.length; i++) {
        if(n_str[i] !== "0") {
            return n_str.substring(i)
        }
    }
    return answer;
}