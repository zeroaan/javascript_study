/*
n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 
1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 

가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 
1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, edge) {
  let max;

  const visited = new Array(n + 1).fill(false);
  const distance = new Array(n + 1).fill(0);

  function BFS(start, edge) {
    const _edge = [...edge];
    const queue = [start];

    while (queue.length > 0) {
      const node = queue.shift();

      const possible = _edge.filter((v) => v.includes(node));

      possible.forEach((v) => {
        if (v[0] === node && !visited[v[1]]) {
          visited[v[1]] = true;

          distance[v[1]] = distance[node] + 1;
          queue.push(v[1]);
        } else if (v[1] === node && !visited[v[0]]) {
          visited[v[0]] = true;

          distance[v[0]] = distance[node] + 1;
          queue.push(v[0]);
        }

        _edge.splice(_edge.indexOf(v), 1);
      });
    }
  }

  BFS(1, edge);

  max = Math.max(...distance);

  return distance.filter((v) => v === max).length;
}
