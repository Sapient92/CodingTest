function solution(num_list) {
    var answer = 0;
    const multifly = num_list.reduce((pre, cur) => pre * cur);
    const sum = num_list.reduce((pre, cur) => pre + cur);
    answer = num_list.length >= 11 ? sum : multifly 
    return answer;
}