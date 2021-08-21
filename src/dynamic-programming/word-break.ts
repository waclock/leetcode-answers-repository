// https://leetcode.com/problems/word-break/

function wordBreakRecur(s: string, wordDict: string[], memo): boolean {
  if (s.length == 0) return true;
  if (memo[s]) return memo[s];
  for (let i = 0; i < s.length + 1; i++) {
    const substring = s.substring(0, i);
    const includes = wordDict.includes(substring);
    if (memo[substring] === undefined) memo[substring] = includes;
    if (includes && wordBreakRecur(s.substring(i), wordDict, memo)) {
      return true;
    }
  }

  return false;
}

const wordBreak = function (s: string, wordDict: string[]): boolean {
  return wordBreakRecur(s, wordDict, {});
};

const s = 'applepenapple';
const wordDict = ['apple', 'pen'];
console.log(wordBreak(s, wordDict));
