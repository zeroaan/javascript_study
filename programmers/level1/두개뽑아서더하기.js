/*
정수 배열 numbers가 주어집니다. 

numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 
모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  const result = []

  numbers.forEach((num1, i1, array) =>
    array.forEach((num2, i2) => i1 !== i2 && !result.includes(num1 + num2) && result.push(num1 + num2)),
  )

  return result.sort((a, b) => a - b)
}

/*
function solution(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j ) {
                if (!result.includes(numbers[i] + numbers[j])) 
                result.push(numbers[i] + numbers[j])     
            }
        }
    }
    return result.sort((a,b) => a-b)
}
*/
