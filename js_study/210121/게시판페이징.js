const pageCount = (m, n) => {
  return Math.ceil(m / n)
}

console.log(pageCount(0, 1))
console.log(pageCount(1, 1))
console.log(pageCount(2, 1))
console.log(pageCount(1, 10))
console.log(pageCount(10, 10))
console.log(pageCount(11, 10))
