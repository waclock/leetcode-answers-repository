const wordBreak = (s, wordDict, cache = new Map()) => {
  if (cache.has(s)) return cache.get(s);

  const result = [];
  for (const word of wordDict) {
    if (s.startsWith(word)) {
      const leftAfter = s.slice(word.length);
      if (!leftAfter.length) result.push(word);
      else wordBreak(leftAfter, wordDict, cache).forEach(val => result.push(`${word} ${val}`));
    }
  }

  cache.set(s, result);

  return result;
};

const s = 'catsanddog';
const wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];

console.log(wordBreak(s, wordDict));
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak2 = (s: string, wordDict: string[]) => {
  const result = [];
  const words = new Set(wordDict);

  const backtrack = (s, words, path, result) => {
    if (s.length === 0) {
      result.push(path.join(' '));

      return;
    }
    for (let i = 1; i <= s.length; i++) {
      const substring = s.substring(0, i);
      if (words.has(substring)) {
        path.push(substring);
        backtrack(s.slice(i), words, path, result);
        path.pop();
      }
    }
  };

  backtrack(s, words, [], result);

  return result;
};

console.log(wordBreak2(s, wordDict));
