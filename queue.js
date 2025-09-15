class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue (enqueue)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage:
const myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
console.log("Queue size:", myQueue.size()); // Output: 2
console.log("Front element:", myQueue.front()); // Output: A
console.log("Dequeued element:", myQueue.dequeue()); // Output: A
console.log("Queue is empty:", myQueue.isEmpty()); // Output: false
myQueue.clear();
console.log("Queue is empty after clear:", myQueue.isEmpty()); // Output: true