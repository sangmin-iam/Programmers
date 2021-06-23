function solution(s) {
  const arr = s.toLowerCase().split("");
  const p = arr.filter((p) => p === "p").length;
  const y = arr.filter((y) => y === "y").length;
  if (p === y) {
    var answer = true;
  } else {
    var answer = false;
  }
  return answer;
}
