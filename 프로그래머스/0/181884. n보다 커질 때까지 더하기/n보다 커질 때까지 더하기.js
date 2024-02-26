function solution(numbers, n) {
    var answer = 0;
    const result = numbers.reduce((pre, cur) => {
        if (pre > n) {
            return pre;
        }
        return pre + cur;
    })
    answer = result
    return answer;
}