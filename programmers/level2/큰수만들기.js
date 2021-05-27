/*
어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. 
number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
*/

function solution(number, k) {
  let numStr = String(number)
  let numLength = numStr.length
  let stack = []
  let count = 0

  for (let i = 0; i < numLength; i++) {
    let current = numStr[i]
    if (!stack.length) {
      stack.push(current)
      continue
    }

    while (stack[stack.length - 1] < current) {
      stack.pop()
      count++

      if (count === k) {
        return stack.join("") + numStr.substring(i)
      }

      if (stack.length === 0) {
        break
      }
    }
    stack.push(current)
  }

  return stack.join("").substring(0, numLength - k)
}
