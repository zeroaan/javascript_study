/*
정수 n이 매개변수로 주어집니다. 

다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 
첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  const answer = [];
  const graph = [];

  let x = 0;
  let y = -1;

  let number = 1;

  for (let i = 1; i < n + 1; i++) {
    graph.push(Array(i).fill(0));
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) y++;
      else if (i % 3 === 1) x++;
      else x--, y--;

      graph[y][x] = number;
      number++;
    }
  }

  for (let i = 0; i < n; i++) {
    answer.push(...graph[i]);
  }

  return answer;
}
