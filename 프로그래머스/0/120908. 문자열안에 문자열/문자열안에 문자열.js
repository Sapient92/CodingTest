function solution(str1, str2) {
    var answer = 0;
    let result = str1.includes(str2);
    if(result) {
        answer = 1
    } else {
        answer = 2
    }
    return answer;
}