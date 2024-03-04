function solution(arr, delete_list) {
    var answer = arr.filter((el) => !delete_list.includes(el))
    return answer;
}