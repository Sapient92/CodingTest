function solution(my_string, letter) {
    var answer = '';
    const arr = my_string.split("")
    const result = arr.filter((el) => el !== letter)
    answer = result.join("")
    return answer;
}