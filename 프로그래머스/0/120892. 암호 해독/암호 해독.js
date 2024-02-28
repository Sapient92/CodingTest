function solution(cipher, code) {
    var answer = cipher.split("").filter((el, i, arr) => (i + 1)%code === 0 ? true : false ).join("");
    return answer;
}