function solution(arr) {
  const answer = []
  const fileMap = new Map()

  arr.forEach((v) => {
    const fileSplit = v.split("/")
    let file = fileSplit[fileSplit.length - 1]

    if (file.includes("_")) {
      const fileName = file.split("_")[0]
      const extension = file.split(".")[1]

      file = `${fileName}.${extension}`
    }

    fileMap.has(file) ? fileMap.set(file, fileMap.get(file) + 1) : fileMap.set(file, 1)
  })

  for (let [key, value] of fileMap.entries()) {
    value !== 1 && answer.push(key, String(value))
  }

  return answer
}

const ex1 = ["a/b/c/a_v2.x", "ab/g/w/b.e", "cv/f/a.x", "u/w/a/a_v8.x", "g/h/c_v5.w", "t/q/b_v6.e"]
const an1 = ["a.x", "3", "b.e", "2"]

const ex2 = ["a/b/c/ce.h", "ab/g/w/g.xa", "cv/f/b_v7.w", "u/w/a/ce_v8.w", "g/h/ce_v5.h", "t/q/g_v6.xa"]
const an2 = ["ce.h", "2", "g.xa", "2"]

const ex3 = ["a/b/c/a_v2.y", "ab/g/w/b.e", "cv/f/h.x", "u/w/a/r_v8.x", "g/h/c_v5.w"]
const an3 = []

console.log(JSON.stringify(solution(ex1)) === JSON.stringify(an1), solution(ex1))
console.log(JSON.stringify(solution(ex2)) === JSON.stringify(an2), solution(ex2))
console.log(JSON.stringify(solution(ex3)) === JSON.stringify(an3), solution(ex3))
