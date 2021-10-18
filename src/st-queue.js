const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  #queue
  constructor() {
    this.#queue = [];
  }

  getUnderlyingList() {
   let resQueue = null;
   for(let i = this.#queue.length -1; i >= 0; i --) {
     let nextValue = {"value":this.#queue[i], "next":resQueue};
     resQueue = nextValue;
   }
   return resQueue;
  }

  enqueue(value) {
    this.#queue.push(value)
  }
  dequeue() {
    return this.#queue.shift()
  }

}
