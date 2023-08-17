class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = value ? 1 : 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      const second = this.head.next;
      second.prev = null;
      this.head.next = null;
      this.head = second;
    }
    this.length--;
  }

  get(index) {
    if (!this.head || index >= this.length) return undefined;

    let temp = this.head;
    if (index < this.length / 2) {
      console.log(true);
      while (index) {
        temp = temp.next;
        index--;
      }
    } else {
      console.log(false);
      temp = this.tail;
      while (index !== this.length - 1) {
        temp = temp.prev;
        index++;
      }
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
    const nextNode = this.get(index);
    const newNode = new Node(value);
    newNode.next = preNode.next;
    newNode.prev = preNode;
    nextNode.prev = newNode;
    preNode.next = newNode;

    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let temp = this.get(index);

    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
  }

  reverse() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let nextNode = temp.next;

    let i = this.length;

    while (i) {
      temp.next = temp.prev;
      temp.prev = nextNode;
      temp = nextNode;
      nextNode = nextNode?.next || null;
      //console.log(temp);
      i--;
    }
  }

  printDLL() {
    let i = this.length;
    let start = this.head;
    while (i) {
      console.log(start.value);
      start = start.next;
      i--;
    }
  }
}

const dll = new DoubleLinkedList(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
dll.push(7);
dll.push(8);
dll.push(9);
dll.push(10);
dll.reverse();
console.log(dll.printDLL());
