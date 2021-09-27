// https://leetcode.com/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let j = 0;

  for (let i = 0; i < pushed.length; i++) {
    let top = pushed[i];
    stack.push(top);

    while (popped[j] === top && j < popped.length) {
      stack.pop();
      j++;
      top = stack[stack.length - 1];
    }
  }

  return !stack.length;
};

const pushed = [1, 2, 3, 4, 5];
const popped = [4, 3, 5, 2, 1];

console.log(validateStackSequences(pushed, popped));
