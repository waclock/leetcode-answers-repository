// https://leetcode.com/problems/intersection-of-two-linked-lists/

class ListNode {
  val: any;
  next: ListNode;
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  while (pA != pB) {
    pA = pA == null ? headB : pA.next;
    pB = pB == null ? headA : pB.next;
  }

  return pA;
  // Note: In the case lists do not intersect, the pointers for A and B
  // will still line up in the 2nd iteration, just that here won't be
  // a common node down the list and both will reach their respective ends
  // at the same time. So pA will be NULL in that case.
};

// Initialize both lists
const head1 = new ListNode(1);
const head2 = new ListNode(5);
const intersection = new ListNode(8);

intersection.next = new ListNode(9).next = new ListNode(10).next = new ListNode(11);
head1.next = new ListNode(2).next = new ListNode(3).next = new ListNode(4).next = intersection;
head2.next = new ListNode(7).next = intersection;

console.log(getIntersectionNode(head1, head2));

/*
a = 2
b = 3
c = 4
a + b + c = 9

[1,2,3,4,5,6,7,8,9]

hA = [1,2,6,7,8,9]
hB = [3,4,5,6,7,8,9]

pA resets to hB
pB is at 8

PB resets to HA
pA is at 4
2 more iterations and they meet at 6

*/
