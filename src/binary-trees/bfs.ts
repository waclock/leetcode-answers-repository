export class INode {
  value: any;
  left: any;
  right: any;
  constructor(value: number, left: INode, right: INode) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const breadthFirstTraversal = (tree: INode, callback: Function): INode[] => {
  if (tree == null) {
    return;
  }

  const queue = [tree];

  while (queue.length > 0) {
    const item = queue.shift();
    const value = item.value;
    callback(value);

    if (item.left == null && item.right == null) {
      continue;
    }
    if (item.left != null) {
      queue.push(item.left);
    }
    if (item.right != null) {
      queue.push(item.right);
    }
  }

  return queue;
};

const tree = new INode(1,
  new INode(2, null, null), new INode(3,
    new INode(4, null, null), null));

breadthFirstTraversal(tree, console.log);

function traverseBFS(root) {
  const queue = [root];
  const res = [];

  while (queue.length) {
    const curr = queue.shift();
    res.push(curr.key);

    if (curr.right) {
      queue.push(curr.right);
    }

    if (curr.left) {
      queue.push(curr.left);
    }
  }

  return res;
}
