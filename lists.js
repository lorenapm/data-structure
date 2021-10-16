class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const array = [5, 6, 9, 2, 3];

let nodo1 = new Node(5);

let nodo2 = new Node(6);

let nodo3 = new Node(9);

nodo1.next = nodo2;
nodo2.next = nodo3;

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
let myNode = new Node(5);
let myNode2 = new Node(6);
myNode.next = myNode2;
let myList = new LinkedList(myNode);

//acceder al primer elemento de mi lista
console.log(myList.head);

console.log(myList);
