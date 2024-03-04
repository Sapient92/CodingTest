function solution(myString, pat) {
    var answer = [...myString].map((el) => el === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0
    return answer;
}