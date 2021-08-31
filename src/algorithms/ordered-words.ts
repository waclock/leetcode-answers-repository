// For example, given the set of words 'quick', 'brown', 'the', 'fox',
// and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

const orderedWords = function (list: string[], str: string): string[] {
  const res = [];
  const set = new Set(list);
  const min = Math.min(...list.map(x => x.length));
  const max = Math.max(...list.map(x => x.length));
  let left = 0;
  let right = min;

  while (left <= str.length - min) {
    const curr = (str.substr(left, right - left));
    if (set.has(curr)) {
      res.push(curr);
      set.delete(curr);
    }
    if (right - left < max) {
      right++;
    } else {
      left++;
      right = left + min;
    }
  }

  return res;
};

const list = ['quick', 'brown', 'the', 'fox'];
const str = 'thequickbrownfox';

console.log(orderedWords(list, str));

const list2 = ['bed', 'bath', 'bedbath', 'and', 'beyond'];
const str2 = 'bedbathandbeyond';

console.log(orderedWords(list2, str2));
