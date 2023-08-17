class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return;
          }
        } else {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            return;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      } else if (current.value == value) {
        // found = true;
        return current;
      }
    }

    if (!current) return "not found";
  }

  breadthFSearch() {
    let current = this.root;
    const que = [current];
    const visited = [];

    while (que.length > 0) {
      que[0].left && que.push(que[0].left);
      que[0].right && que.push(que[0].right);
      visited.push(que.shift().value);
    }
    return visited;
  }

  depthFSearchPre() {
    const res = [];
    function traverse(node) {
      res.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return res;
  }

  depthFSearchPost() {
    const res = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      res.push(node.value);
    }
    traverse(this.root);
    return res;
  }

  depthFSearchInOrder() {
    const res = [];
    function traverse(node) {
      node.left && traverse(node.left);
      res.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return res;
  }
}

const bst = new BST();

// bst.insert(5);
// bst.insert(4);
// bst.insert(3);
// bst.insert(6);

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.breadthFSearch());
console.log(bst.depthFSearchPost());
console.log(bst.depthFSearchInOrder());
