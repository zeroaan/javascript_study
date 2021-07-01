/*
주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(tickets) {
  const answer = []

  function DFS(airport, tickets, path) {
    const newPath = [...path, airport]

    if (tickets.length === 0) {
      answer.push(newPath)
    } else {
      tickets.forEach((ticket, idx) => {
        if (ticket[0] === airport) {
          const newTickets = [...tickets]
          newTickets.splice(idx, 1)
          DFS(ticket[1], newTickets, newPath)
        }
      })
    }
  }

  DFS("ICN", tickets, [])

  return answer.sort()[0]
}
