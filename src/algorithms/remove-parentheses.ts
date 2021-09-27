// https:// leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s): string {
  const stack = [];
  const setRemover = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        setRemover.add(i);
      } else {
        stack.pop();
      }
    }
  }

  while (stack && stack.length > 0) setRemover.add(stack.pop());

  let strBuilder = '';
  for (let i = 0; i < s.length; i++) {
    if (!setRemover.has(i))strBuilder += s[i];
  }

  return strBuilder;
};

const s = '(a(b(c)d)';

console.log(minRemoveToMakeValid(s));
