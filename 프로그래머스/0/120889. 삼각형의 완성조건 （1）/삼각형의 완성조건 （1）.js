function solution(sides) {
    var answer = 0;
    const [a,b,c] = sides;
    if(a + b > c && a + c > b && b + c > a) {
        answer = 1
    } else {
        answer = 2
    }
    return answer;
}