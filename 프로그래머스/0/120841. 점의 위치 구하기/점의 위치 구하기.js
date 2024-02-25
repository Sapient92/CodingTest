function solution(dot) {
    var answer = 0;
    const [a , b] = dot
    if(a>0 && b> 0) {
        answer = 1
    } else if(a<0 && b>0) {
        answer = 2
    } else if (a<0 && b<0) {
        answer = 3
    } else {
        answer = 4
    }
    return answer;
}