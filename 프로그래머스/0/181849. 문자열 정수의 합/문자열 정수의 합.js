function solution(num_str) {
    var answer = num_str.split("").reduce((pre,cur) => Number(pre) + Number(cur))
    return answer;
}