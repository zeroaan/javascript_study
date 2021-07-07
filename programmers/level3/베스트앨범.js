/*
스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

속한 노래가 많이 재생된 장르를 먼저 수록합니다.
장르 내에서 많이 재생된 노래를 먼저 수록합니다.
장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
*/

function solution(genres, plays) {
    const answer = [];
    
    const sortGenre = sortPlays(genres, plays);
    
    for (let i = 0; i < sortGenre.length; i++) {
        const genre = sortGenre[i];
        
        let sortPlay = [];
        const index = [];
        const play = [];
        
        for (let j = 0; j < genres.length; j++) {
            if (genres[j] === genre) {
                index.push(j);
                play.push(plays[j]);
            }
        }
        
        sortPlay = sortPlays(index, play).slice(0, 2);
        
        sortPlay.forEach((v) => answer.push(Number(v)));
    }
        
    return answer;
}

function sortPlays(genres, plays) {
    let result = [];
    const genreCount = {};
    
    for (let i = 0; i < genres.length; i++) {
        if (!genreCount[genres[i]]) genreCount[genres[i]] = plays[i];
        else genreCount[genres[i]] += plays[i];
    }
    
    result = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
    
    return result.map((v) => v[0]);
}

/*
function solution(genres, plays) {
  const answer = [];

  const sortGenre = sortGenres(genres, plays);

  return answer;
}

function sortGenres(genres, plays) {
  const result = [];
  const genreMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    if (!genreMap.has(genres[i])) {
      genreMap.set(genres[i], plays[i]);
    } else {
      genreMap.set(genres[i], genreMap.get(genres[i]) + plays[i]);
    }
  }
}
*/