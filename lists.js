// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// const array = [5, 6, 9, 2, 3];

// let nodo1 = new Node(5);

// let nodo2 = new Node(6);

// let nodo3 = new Node(9);

// nodo1.next = nodo2;
// nodo2.next = nodo3;

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }
// let myNode = new Node(5);
// let myNode2 = new Node(6);
// myNode.next = myNode2;
// let myList = new LinkedList(myNode);

//acceder al primer elemento de mi lista
// console.log(myList.head);

// console.log(myList);

//crear una lista

//1.creo la clase de cada node o item
class LinkedListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//2.creo la lista que guardará el primer elemento de la lista, apuntando a null
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

//crear una lista a partir del array

//1.creo lista vacía (un head apuntando a null)
const myNewList = new LinkedList();

//recorro el array
//ojo, for creo los nodos que todos apuntan a null
const array = [5, 6, 9, 2, 3];
//creo un primer nodo (array[0]) y a partir de ahí luego hago el bucle a partir i=1
let nodeAux = new LinkedListItem(array[0]);
myNewList.head = nodeAux;
let lastItem = nodeAux;

for (i = 1; i < array.length; i++) {
  let nodeAux = new LinkedListItem(array[i]);
  lastItem.next = nodeAux;
  lastItem = nodeAux;
}

console.log(myNewList);
