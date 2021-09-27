// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  function isValidPalindrome(s, left = 0, right = s.length - 1, livesLeft = 1) {
    while (left <= right) {
      if (s[left] !== s[right]) {
        if (livesLeft === 0) return false;

        return isValidPalindrome(s, left + 1, right, 0) || isValidPalindrome(s, left, right - 1, 0);
      }
      left++;
      right--;
    }

    return true;
  }

  return isValidPalindrome(s);
};

const input = 'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga';

// TODO: Improve case where moving left 1 gets executed but solution was right 1

console.log(validPalindrome(input));
