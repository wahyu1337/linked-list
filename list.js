import Node from "./node.js";

export default class LinkedList{
    constructor() {
        this.head = null;
    }

    // add node with containing a value into the end of list
    append(value) {
        // make a new node
       const newNode = new Node(value);

        // check if the list is empty
        if (this.head === null){
            this.head = newNode;
            return;
        }

        // check if head is not empty
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        
        // if next node is null, put the new node
        current.nextNode = newNode;        
    }

    // add node with containing a value into the start of the list 
    prepend(value) {
        // make the new node
        const newNode = new Node(value);

        // make the next node on current head
        newNode.nextNode = this.head;

        // Make this new node the official head of the list
        this.head = newNode;
    }
    
    // return the total number of node
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count += 1
            current = current.nextNode;
        }
        return count;
    }
}
