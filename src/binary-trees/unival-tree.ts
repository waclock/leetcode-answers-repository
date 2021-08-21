class INode {
    value: any;
    left: any;
    right: any;
    constructor(value: number, left: INode, right: INode) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
}

function isUnival(root: INode): boolean {
  // A null tree is also a universal tree
  if (root == null) {
    return true;
  }
  // Check the parent node's value with the left node
  if (root.left != null && root.value != root.left.value) {
    return false;
  }
  // Check the parent node's value with the right node
  if (root.right != null && root.value != root.right.value) {
    return false;
  }

  return isUnival(root.left) && isUnival(root.right);
}

function solve(root: INode, total: number): number {
  // Null check
  if (root == null) {
    return 0;
  }
  // Get unival trees from left and right
  total += solve(root.left, total) + solve(root.right, total);
  // If root node is unival tree add it to the count
  if (isUnival(root)) {
    return total + 1;
  }

  return total;
}

const solution = (root: INode): number => solve(root, 0);

const tree = new INode(1,
  new INode(1, null, null), new INode(1,
    new INode(1, null, null), null));

console.log(solution(tree));
