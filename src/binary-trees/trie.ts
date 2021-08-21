export class INode {
    value: any;
    children: {string?: INode[]};
    words: INode[];
    constructor(value: any) {
      this.value = value;
      this.children = {};
      this.words = [];
    }
}

class Trie {
    root: INode;
    constructor(words: string[]) {
      this.root = new INode(null);
      this.initializeTrie(words);
    }

    initializeTrie(words: string[]): void {
      for (const word of words) {
        let currentNode = this.root;
        const wordNode = new INode(word);
        currentNode.words.push(wordNode);
        for (let i = 0; i < word.length; i++) {
          const char = word[i];
          if (currentNode.children[char]) {
            currentNode = currentNode.children[char];
          } else {
            currentNode.children[char] = new INode(char);
            currentNode = currentNode.children[char];
          }
          currentNode.words.push(wordNode);
        }
      }
      console.log(this.root);
    }

    search(query: string): string[] {
      let currentNode = this.root;
      for (let i = 0; i < query.length; i++) {
        const char = query[i];
        if (currentNode.children[char]) {
          currentNode = currentNode.children[char];
        } else {
          return [''];
        }
      }

      return currentNode.words.map(word => word.value);
    }
}

const words = ['dog', 'deer', 'deal', 'deploy', 'darwin', 'dupin'];
const trie = new Trie(words);

console.log(trie.search('depl'));

class Trie2 {
    root;
    constructor() {
      this.root = {};
    }

    insert(word) {
      let node = this.root;
      for (const c of word) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.isWord = true;
    }

    traverse(word) {
      let node = this.root;
      for (const c of word) {
        node = node[c];
        if (node == null) return null;
      }

      return node;
    }

    search(word) {
      const node = this.traverse(word);

      return node != null && node.isWord === true;
    }

    startsWith(prefix) {
      return this.traverse(prefix) != null;
    }
}
