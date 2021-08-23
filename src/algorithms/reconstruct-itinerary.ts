// https://leetcode.com/problems/reconstruct-itinerary/
// Backtracking
/* Input: tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"] */

const findItinerary = (tickets: string[][]): string[] => {
  const origin = 'JFK';
  let res = [];
  const originIndex = tickets.findIndex(trip => trip[0] === origin);
  const init = tickets[originIndex];

  tickets.splice(originIndex, 1);

  const backtrack = (current: string[], tripsLeft: string[][]) => {
    console.log(current);
    console.log(tripsLeft);
    if (tripsLeft.length === 0) res = current;
    for (let i = 0; i < tripsLeft.length; i++) {
      if (current[current.length - 1] == tripsLeft[i][0]) {
        current.push(tripsLeft[i][1]);
        tripsLeft.splice(i, 1);
        backtrack(current, tripsLeft);
      }
    }
  };
  console.log(tickets);

  backtrack(init, tickets);

  return res;
};

const tickets = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']];

console.log(findItinerary(tickets));
