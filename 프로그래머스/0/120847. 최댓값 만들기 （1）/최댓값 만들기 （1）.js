function solution(numbers) {
  var answer = 0;
  const sortedArray = numbers.sort((a, b) => a - b);
  answer =
    sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];
  return answer;
}