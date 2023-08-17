class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor(value) {
    const newNode = value && new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = value ? 1 : 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) throw new Error("Invalid Operation");

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    let secondLast = this.head;
    while (secondLast.next !== this.tail) {
      secondLast = secondLast.next;
    }
    this.tail = secondLast;
    secondLast.next = null;
    this.length--;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (!this.head) throw new Error("Invalid Operation");
    const temp = this.head;
    const secondNode = this.head.next;
    temp.next = null;
    this.head = secondNode;
    this.length--;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    while (index) {
      temp = temp.next;
      index--;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.unShift(value);
    if (index === this.length) return this.push(value);

    const preNode = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = preNode.next;
    preNode.next = newNode;

    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const preNode = this.get(index - 1);
    const currentNode = preNode.next;

    preNode.next = currentNode.next;
    currentNode.next = null;
  }

  reverse() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let nextNode = temp.next;
    let preNode = null;

    while (temp.next !== this.head) {
      nextNode = nextNode.next;
      temp.next = preNode;
      preNode = temp;
      temp = nextNode;
    }
    temp.next = preNode;
    this.head.next = temp;
  }
}

const list1 = new LinkList(0);
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);

console.log(list1);
list1.reverse();
console.log(list1);
