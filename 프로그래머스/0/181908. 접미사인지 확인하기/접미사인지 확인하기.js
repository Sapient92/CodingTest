function solution(my_string, is_suffix) {
    const a = my_string.substring(my_string.length - is_suffix.length).includes(is_suffix);
    var answer = a ? 1 : 0;
    return answer;
}