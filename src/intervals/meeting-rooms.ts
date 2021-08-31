// https://leetcode.com/problems/meeting-rooms/
// Input: intervals = [[0, 30], [5, 10], [15, 20]]
// Output: false
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function (intervals: number[][]) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let current = [];
  for (const interval of intervals) {
    if (current[1] > interval[0]) return false;
    current = interval;
  }

  return true;
};

const intervals = [[7, 10], [2, 4]];

console.log(canAttendMeetings(intervals));
