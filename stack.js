class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log("Stack size:", myStack.size()); // Output: 2
console.log("Top element:", myStack.peek()); // Output: 20
console.log("Popped element:", myStack.pop()); // Output: 20
console.log("Stack is empty:", myStack.isEmpty()); // Output: false
myStack.clear();
console.log("Stack is empty after clear:", myStack.isEmpty()); // Output: true