/*
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
*/

function solution(arr1, arr2) {
  const answer = []
  let sum = 0
  let temp = []

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2[0].length; k++) {
      for (let j = 0; j < arr2.length; j++) {
        sum = sum + arr1[i][j] * arr2[j][k]
      }
      temp.push(sum)
      sum = 0
    }
    answer.push(temp)
    temp = []
  }
  return answer
}
