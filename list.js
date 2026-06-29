// node class
class Node {
    // constructor
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
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
    
    logs() {
        console.dir(this.name);
    }
}

const list = new LinkedList();
// console.log(list);
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("snake");
// list.append("turtle");
console.dir(list, {depth: null});
