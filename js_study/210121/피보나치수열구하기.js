const array = [0, 1]

const fibonacci = (n) => {
  for (let i = 0; i < n - 2; i++) {
    array.push(array[i] + array[i + 1])
  }
  return array
}

console.log(fibonacci(8))
