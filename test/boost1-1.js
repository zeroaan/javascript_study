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

console.log(solution(["a/b/c/a_v2.x", "ab/g/w/b.e", "cv/f/a.x", "u/w/a/a_v8.x", "g/h/c_v5.w", "t/q/b_v6.e"]))
console.log(solution(["a/b/c/ce.h", "ab/g/w/b.e", "cv/f/b_v7.w", "u/w/a/ce_v8.w", "g/h/ce_v5.h", "t/q/b_v6.e"]))
console.log(solution(["a/b/c/a_v2.y", "ab/g/w/b.e", "cv/f/h.x", "u/w/a/r_v8.x", "g/h/c_v5.w"]))
