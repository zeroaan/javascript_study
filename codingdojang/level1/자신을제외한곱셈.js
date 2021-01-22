/* 배열 [a, b, c, d]를 입력하면 배열[bcd, acd, abd, abc]를 출력하는 코드를 작성하시오. */

const multiple = ([a, b, c, d]) => {
  return [b * c * d, a * c * d, a * b * d, a * b * c]
}

const inputArray = [2, 6, 4, 7]
console.log(multiple(inputArray))
