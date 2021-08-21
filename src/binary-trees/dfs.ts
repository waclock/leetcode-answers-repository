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

const depthFirstTraversal = (tree: INode, callback: Function): INode[] => {
  const queue = [];
  const visitNode = (current: INode): void => {
    queue.push(current.value);
    if (current.left) visitNode(current.left);
    if (current.right) visitNode(current.right);
  };
  visitNode(tree);
  callback(queue);

  return queue;
};

const tree = new INode(1,
  new INode(2, null, null), new INode(3,
    new INode(4, null, null), null));

depthFirstTraversal(tree, console.log);
