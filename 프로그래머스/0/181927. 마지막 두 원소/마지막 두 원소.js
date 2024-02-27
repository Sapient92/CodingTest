function solution(num_list) {
    const [a, b] = num_list.slice(-2)
    b > a ? num_list.push(b - a) : num_list.push(2 * b)
    return num_list;
}