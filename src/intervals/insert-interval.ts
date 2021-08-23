// https://leetcode.com/problems/insert-interval/

const insert = function (intervals: number[][], newInterval: number[]): number[][] {
  const results = [];

  let i = 0;
  // Insert smaller intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    results.push(intervals[i]);
    i++;
  }

  // Merge in new interval with upcoming interval
  newInterval = [Math.min(newInterval[0], i < intervals.length ? intervals[i][0] : Infinity), newInterval[1]];

  // Merge intervals until no more merging required
  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  results.push(newInterval);

  // After newInterval added, append the rest of the intervals
  return results.concat(intervals.slice(i, intervals.length));
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert2 = function (intervals: number[][], newInterval: number[]): number[][] {
  const response = [];
  const [newStart, newEnd] = newInterval;
  let idx = 0;
  while (idx < intervals.length && intervals[idx][0] < newStart) {
    response.push(intervals[idx]);
    idx++;
  }

  if (response.length == 0 || response[response.length - 1] < newStart) {
    response.push(newInterval);
  } else {
    const modifiedInterval = response.pop();
    modifiedInterval[1] = Math.max(modifiedInterval[1], newEnd);
    response.push(modifiedInterval);
  }

  while (idx < intervals.length) {
    const currInterval = intervals[idx++];
    const [start, end] = currInterval;
    if (response[response.length - 1][1] < start) {
      response.push(currInterval);
    } else {
      const modifiedInterval = response.pop();
      modifiedInterval[1] = Math.max(modifiedInterval[1], end);
      response.push(modifiedInterval);
    }
  }

  return response;
};

const intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
const newInterval = [4, 8];
console.log(insert(intervals, newInterval));
