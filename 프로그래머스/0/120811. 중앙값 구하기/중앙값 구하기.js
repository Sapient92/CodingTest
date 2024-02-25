function solution(array) {
    var answer = 0
    const sortedArray = array.sort((a, b) => a - b)
    answer = sortedArray[(sortedArray.length-1) / 2]
    return answer;
}