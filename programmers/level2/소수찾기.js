/*
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 
흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 
종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  let answer = 0

  const n = numbers.split("")
  const nums = new Set()
  combi(n, "")

  function combi(a, s) {
    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s))
        if (chkPrime(Number(s))) {
          answer++
        }
      }
    }
    if (a.length > 0) {
      for (var i = 0; i < a.length; i++) {
        var t = a.slice(0)
        t.splice(i, 1)
        combi(t, s + a[i])
      }
    }
  }

  function chkPrime(num) {
    if (num < 2) return false
    if (num === 2) return true
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  return answer
}
