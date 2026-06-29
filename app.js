import LinkedList from "./list.js";
//
// linked list project
console.log('test app');

const list = new LinkedList();
// console.log(list);
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("snake");
// list.append("turtle");
console.dir(list, {depth: null});
console.log(`total number of nodes: ${list.size()}`);