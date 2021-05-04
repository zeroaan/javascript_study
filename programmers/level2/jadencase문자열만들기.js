/*
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 

문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ")
}

/*
function solution(s) {
    return s.split(" ").map(v => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
}
*/
