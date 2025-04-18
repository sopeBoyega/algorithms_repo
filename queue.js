export default class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue (Enqueue)
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from the queue (Dequeue)
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

     // Check if queue is empty
     isEmpty() {
        return this.items.length === 0;
    }

    // Peek (View the front element)
    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }


   

    // Get size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}