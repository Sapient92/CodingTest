function solution(my_string) {
    var answer = my_string.split("").map((v) => /[A-Z]/.test(v) ? v.toLowerCase() : v.toUpperCase()).join("");
    return answer;
}