function solution(money) {
    var answer = [];
    const cup = Math.floor(money / 5500);
    const change = money % 5500
    answer.push(cup, change)
    return answer;
}