function solution(s) {
  var mid = Math.floor(s.length / 2);
  var answer =
    Math.floor(s.length % 2) === 0 ? s.substr(mid - 1, 2) : s.substr(mid, 1);
  return answer;
}
