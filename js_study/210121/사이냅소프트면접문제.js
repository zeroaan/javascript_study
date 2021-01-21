const names =
  "이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌"

const namesArray = names.split(",")

/* 김씨와 이씨는 각각 몇 명 인가요? */
let kim = 0
let lee = 0

for (let i = 0; i < namesArray.length; i++) {
  if (namesArray[i][0] === "김") {
    kim++
  } else if (namesArray[i][0] === "이") {
    lee++
  }
}

console.log(`김씨: ${kim}명, 이씨: ${lee}명`)

/* "이재영"이란 이름이 몇 번 반복되나요? */
let leejaeyoung = 0

//for (let i = 0; i < namesArray.length; i++) {
//  if (namesArray[i] === "이재영") {
//    leejaeyoung++
//  }
//}

namesArray.map((v) => v === "이재영" && leejaeyoung++)

console.log(`이재영: ${leejaeyoung}명`)

/* 중복을 제거한 이름을 출력하세요. */
const result = []

for (let i = 0; i < namesArray.length; i++) {
  if (!result.includes(namesArray[i])) {
    result.push(namesArray[i])
  }
}

console.log(`중복 제거한 이름: ${result}`)

/* 중복을 제거한 이름을 오름차순으로 정렬하여 출력하세요. */
console.log(`중복 제거한 이름 오름차순: ${result.sort()}`)
