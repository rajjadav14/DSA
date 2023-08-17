class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = value || 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) return undefined;

    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
  }
}

const s = new Stack(1);
s.push(2);
s.push(3);
s.pop();
console.log(s);
