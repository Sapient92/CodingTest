function solution(my_string, index_list) {
    var answer = [];
    const a = [...my_string]
    for(let i = 0; i < index_list.length; i++) {
        answer.push(a[index_list[i]]);
    }
    return answer.join("")
    
}