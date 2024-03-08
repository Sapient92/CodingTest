function solution(my_string) {
    var answer = [...my_string].map(el => +el).filter(el => el || el === 0).sort((a,b) => a-b)
    return answer;
}