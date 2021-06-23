const x = 6804;

function solution(x) {
  const arr = ("" + x)
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  var answer = x % arr === 0 ? true : false;
  return answer;
}

console.log(solution(x));
