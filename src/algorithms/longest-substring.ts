// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring is "ece" with length 3.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const lengthOfLongestSubstringKDistinct = function (s: string, k: number): number {
  if (!s || k === 0) {
    return 0;
  }
  const map = new Map();
  let start = 0;
  let end = 0;
  let r = 0;
  while (end <= s.length) {
    if (map.size === k && !map.has(s[end]) || end === s.length) {
      r = Math.max(r, end - start);
      while (map.size === k) {
        const count = map.get(s[start]);
        if (count - 1 === 0) {
          map.delete(s[start]);
        } else {
          map.set(s[start], count - 1);
        }
        start++;
      }
    }
    if (map.has(s[end])) {
      map.set(s[end], map.get(s[end]) + 1);
    } else {
      map.set(s[end], 1);
    }
    end++;
  }

  return r;
};

const s = 'bacc';
const k = 2;

const lengthOfLongestSubstringKDistinct2 = (s, k) => {
  const hash = {};
  let distinct = 0;
  let max = 0;
  let start = 0;
  let end = 0;
  while (end < s.length) {
    if (hash[s[end]] == null || hash[s[end]] <= 0) distinct++;
    hash[s[end]] = hash[s[end]] + 1 || 1;
    end++;
    while (distinct > k) {
      hash[s[start]]--;
      if (hash[s[start++]] == 0) distinct--;
    }
    max = Math.max(max, end - start);
  }

  return max;
};

