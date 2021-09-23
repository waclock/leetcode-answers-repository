// https://leetcode.com/problems/merge-two-sorted-lists/ but with arrays

// Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1: number[], l2: number[]): number[] {
  let [idx1, idx2] = [0, 0];
  const response = [];
  // Orderly merge two arrays
  while (idx1 < l1.length - 1 || idx2 < l2.length - 1) {
    if (l1[idx1] < l2[idx2]) {
      response.push(l1[idx1++]);
    } else {
      response.push(l2[idx2++]);
    }
  }
  // Store remaining elements of first array
  while (idx1 < l1.length) response.push(l1[idx1++]);

  // Store remaining elements of second array
  while (idx2 < l2.length) response.push(l2[idx2++]);

  return response;
};

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];

console.log(mergeTwoLists(l1, l2));
