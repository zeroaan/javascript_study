/*
124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
*/

function solution(n) {
  let answer = ""

  while (n >= 1) {
    if (n % 3 === 0) {
      answer += "4"
    } else if (n % 3 === 1) {
      answer += "1"
    } else if (n % 3 === 2) {
      answer += "2"
    }
    n = (n - 1) / 3
  }

  return answer
}
