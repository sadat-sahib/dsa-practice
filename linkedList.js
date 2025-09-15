class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
//O(1)
  prepend(vlaue) {
    const newNode = new Node(vlaue);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;

  }
//O(n)
  append(vlaue) {
    const newNode = new Node(vlaue);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode
    }

    this.size++;
  }

  insert (value, index) {
    if (index < 0 || index > this.size) {
        return
    }
    if (index === 0) { 
        this.prepend(value)
    } else {
        const newNode = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("Is list empty?", list.isEmpty());
console.log("List size:", list.getSize());
list.print();

list.insert(10, 0);
list.print();

list.insert(20,0);
list.print();
// lesson 19