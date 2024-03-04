function solution(my_string, alp) {
    var answer = my_string.split("").map((el) => el === alp ? el.toUpperCase() : el).join("")
    return answer;
}