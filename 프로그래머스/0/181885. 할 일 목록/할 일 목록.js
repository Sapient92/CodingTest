function solution(todo_list, finished) {
    var answer = todo_list.filter((_, i) => !finished[i])
    return answer;
}