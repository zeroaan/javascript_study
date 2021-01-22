/* 문자와 숫자가섞인 문자열을 입력받을때 구별하여출력해라 */

const solution = (input) => {
  let str = ""
  let num = ""

  input.split("").map((v) => (isNaN(v) || v === " " ? (str += v) : (num += v)))

  return { str, num }
}

const result = solution("c910m6ia 1ho")
console.log(`src: ${result.str}\nnum: ${result.num}`)
