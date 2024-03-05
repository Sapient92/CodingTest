function solution(str_list, ex) {
    var answer = str_list.filter((el) => !el.includes(ex)).join("")
    return answer;
}