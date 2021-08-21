// https://leetcode.com/problems/clone-graph/
// Definition for a Node.
class NodeImpl {
    val: any;
    neighbors: NodeImpl[];
    constructor(val, neighbors?) {
      this.val = val === undefined ? 0 : val;
      this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

//  Solution
const cloneGraph = function (graph) {
  return clone(graph, {});
};

const clone = function (node: NodeImpl, map) {
  if (!node) return null;
  if (map[node.val]) return map[node.val];

  const cloneNode = new NodeImpl(node.val);

  map[node.val] = cloneNode;

  for (let i = 0; i < node.neighbors.length; i++) {
    cloneNode.neighbors.push(clone(node.neighbors[i], map));
  }

  return cloneNode;
};
