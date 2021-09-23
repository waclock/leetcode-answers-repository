// https://leetcode.com/problems/reorder-list/
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
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  // Find middle node
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let midNode = slow;
  let current = midNode;
  let prev = null;
  // Revert list
  while (current != null) {
    // [1,2,3]
    // tmp is 2
    const tmp = current.next;
    // 2's next is going to be 1 (prev)
    current.next = prev;
    // prev will now be 1
    prev = current;
    // current will now be 2
    current = tmp;
  }

  // Reassign midNode to new node
  midNode = prev;

  // Merge lists 1 node at a time
  let first = head;
  let second = midNode;
  while (second.next != null) {
    // first = [1,2,3], second = [6,5,4]
    // tmp = 2
    let tmp = first.next;
    // first.next = 6        (1 -> 6)
    first.next = second;
    // first = 2
    first = tmp;

    // tmp = 5
    tmp = second.next;
    // second.next = 2
    second.next = first;
    // second = 5
    second = tmp;
  }

  return head;
};

const head1 = new ListNode(0);

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
const node8 = new ListNode(8);

head1.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

let reordered = reorderList(head1);

while (reordered) {
  console.log(reordered.val);
  reordered = reordered.next;
}
