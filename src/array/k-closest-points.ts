// https://leetcode.com/problems/k-closest-points-to-origin/
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const res = [];
  const distance = (point) => point[0] ** 2 + point[1] ** 2;
  const memo = {};
  points.forEach(element => {
    const currentDistance = memo[element] || distance(element);
    if (res.length < k) res.push(element);
    else if (distance(res[res.length - 1]) > distance(element)) res[res.length - 1] = element;
    res.sort((p1, p2) => distance(p1) - distance(p2));
  });

  return res;
};

const points = [[1, 3], [-2, 2]];
const k = 1;

console.log(kClosest(points, k));

const points2 = [[3, 3], [5, -1], [-2, 4]];
const k2 = 2;

console.log(kClosest(points2, k2));

