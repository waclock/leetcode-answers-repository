// https://leetcode.com/problems/merge-intervals/
// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (!intervals || intervals.length < 1) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let pastInterval = [];
  const response = [];
  for (const currentInterval of intervals) {
    // Overlap
    if (pastInterval[1] >= currentInterval[0]) {
      response[response.length - 1] = ([pastInterval[0], Math.max(pastInterval[1], currentInterval[1])]);
    // No overlap, append in normally
    } else {
      response.push(currentInterval);
    }
    pastInterval = response[response.length - 1];
  }

  return response;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(merge(intervals));
