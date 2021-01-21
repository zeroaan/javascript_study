/* 
피보나치 수열이란, 첫 번째 항의 값이 0이고 두 번째 항의 값이 1일 때, 이후의 항들은 이전의 두 항을 더한 값으로 이루어지는 수열을 말한다.

예) 0, 1, 1, 2, 3, 5, 8, 13

인풋을 정수 n으로 받았을때, n 이하까지의 피보나치 수열을 출력하는 프로그램을 작성하세요 */

const array = [0, 1]

const fibonacci = (n) => {
  for (let i = 0; i < n - 2; i++) {
    array.push(array[i] + array[i + 1])
  }
  return array
}

console.log(fibonacci(8))
