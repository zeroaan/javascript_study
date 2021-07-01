/*
두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 
아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 
"hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 
최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
*/

function bfs(begin, target, words) {
  const queue = [[begin, 0]]

  if (words.includes(begin)) {
    words.splice(words.indexOf(begin), 1)
  }

  while (queue.length > 0) {
    const [cur, dist] = queue.shift()

    if (cur === target) return dist

    const possible = words.filter((word, idx) => {
      let cnt = 0

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== cur[i]) {
          cnt += 1
          if (cnt > 1) return false
        }
      }

      words.splice(idx, 1)

      return true
    })

    possible.forEach((word) => {
      queue.push([word, dist + 1])
    })
  }

  return 0
}

function solution(begin, target, words) {
  return bfs(begin, target, words)
}
