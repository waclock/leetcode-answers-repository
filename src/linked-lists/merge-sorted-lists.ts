// https://leetcode.com/problems/merge-two-sorted-lists/solution/

class ListNode {
  val: any;
  next: ListNode;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

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
// l1 = [-2,2,4,6]
// l2 = [1,3,5,6,7]
const mergeTwoLists = function (l1: ListNode, l2: ListNode): ListNode {
  // maintain an unchanging reference to node ahead of the return node.
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != undefined && l2 != undefined) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // At least one of l1 and l2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
  prev.next = l1 == null ? l2 : l1;

  return prehead.next;
};

// Initialize both lists
const head1 = new ListNode(-2);
const head2 = new ListNode(1);

const node2 = new ListNode(2);
const node4 = new ListNode(4);
const node6 = new ListNode(6);
const node6_2 = new ListNode(6);
const node3 = new ListNode(3);
const node5 = new ListNode(5);
const node7 = new ListNode(7);

head1.next = node2;
node2.next = node4;
node4.next = node6;
head2.next = node3;
node3.next = node5;
node5.next = node6_2;
node6_2.next = node7;

console.log(head1);
let merged = mergeTwoLists(head1, head2);

while (merged) {
  console.log(merged.val);
  merged = merged.next;
}

