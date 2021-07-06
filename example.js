const value = [3, 5, 1, 2, 4, 6];

/*
const result = value.reduce((acc, cur, idx) => {
  if (cur >= 3) return acc.push(idx);
}, []);

console.log(result);
*/

const result = value.reduce((acc, cur, idx) => {
  if (cur >= 3) acc.push(idx);
  return acc;
}, []);

console.log(result);
