// https://leetcode.com/problems/linked-list-cycle/

class ListNode {
  val: any;
  next: ListNode;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head: ListNode): boolean {
  const set = new Set();
  let current = head;
  while (current) {
    if (set.has(current.val)) return true;

    set.add(current.val);

    current = current.next;
  }

  return false;
};

// Initialize both lists
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2.next = node3.next = node4;

node4.next = node2;

console.log(hasCycle(head));

const hasCycle2 = function (head: ListNode): boolean {
  if (head == null) {
    return false;
  }

  let slow = head;
  let fast = head;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

console.log(hasCycle2(head));
