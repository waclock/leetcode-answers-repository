// https://leetcode.com/problems/meeting-rooms-ii/
// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: 2
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
  const starts = intervals.map(x => x[0]).sort((a, b) => a - b);
  const ends = intervals.map(x => x[1]).sort((a, b) => a - b);
  let [i, j, rooms, max] = [0, 0, 0, 1];
  while (i < starts.length) {
    if (starts[i] < ends[j]) {
      rooms++;
      if (rooms > max) max = rooms;
      i++;
    } else {
      rooms--;
      j++;
    }
  }

  return max;
};

const intervals = [[0, 30], [5, 10], [15, 20]];

console.log(minMeetingRooms(intervals));
