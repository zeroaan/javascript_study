function solution(arr) {
  const answer = []
  const type = { BOOL: 1, SHORT: 2, FLOAT: 4, INT: 8, LONG: 8 }
  let temp = ""

  arr.forEach((v) => {
    const byte = type[v]

    if (temp.length % byte !== 0) {
      temp += ".".repeat(byte - (temp.length % byte))
    }

    if (temp.length === 8) {
      answer.push(temp)
      temp = ""
    }

    if (v === "INT") {
      answer.push("########")
    } else if (v === "LONG") {
      answer.push("########", "########")
    } else {
      temp += "#".repeat(byte)
    }
  })

  if (temp.length !== 0) {
    temp += ".".repeat(8 - temp.length)
    answer.push(temp)
  }

  return answer.length > 16 ? "HALT" : answer.join(",")
}

const ex1 = ["INT", "INT", "BOOL", "SHORT", "LONG"]
const an1 = "########,########,#.##....,########,########"

const ex2 = ["INT", "SHORT", "FLOAT", "INT", "BOOL"]
const an2 = "########,##..####,########,#......."

const ex3 = ["FLOAT", "SHORT", "BOOL", "BOOL", "BOOL", "INT"]
const an3 = "########,#.......,########"

const ex4 = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "LONG", "BOOL", "LONG", "SHORT", "LONG", "LONG"]
const an4 = "HALT"

const ex5 = ["FLOAT", "BOOL", "BOOL", "BOOL", "SHORT"]
const an5 = "#######.,##......"

console.log(solution(ex1) === an1, solution(ex1))
console.log(solution(ex2) === an2, solution(ex2))
console.log(solution(ex3) === an3, solution(ex3))
console.log(solution(ex4) === an4, solution(ex4))
console.log(solution(ex5) === an5, solution(ex5))
