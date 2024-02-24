function solution(numbers) {
    var answer = 0;
    const sum = numbers.reduce((arr, cur) => arr + cur , 0 )
    answer = sum / numbers.length
    return answer;
}