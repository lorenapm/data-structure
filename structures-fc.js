//LISTAS
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
  //recorrer la lista y mostrarla o imprimirla
  printList() {
    //1. creo un puntero auxiliar y lo apunto a head de la lista
    let aux = this.head;
    //2.la recorro con un while: condición: recórrela hasta que llegues al final (es decir, hasta que next apunte a null)
    //3. AVANCE: le digo que el puntero auxiliar es = aux.next
    while (aux !== null) {
      console.log(aux.value);
      aux = aux.next;
    }
  }

  //length()
  length() {
    let aux = this.head;
    let counter = 0;
    while (aux !== null) {
      counter++;
      aux = aux.next;
    }
    return counter;
  }

  //agregar elemento lista vacía
  push(element) {
    if (this.head === null) {
      //creo nuevo nodo y le digo que es el head de mi lista
      let nodeAux = new LinkedListItem(element);
      this.head = nodeAux;
    } else {
      //si la lista no está vacía: creo nuevo nodo
      let nodeAux = new LinkedListItem(element);
      //busco el elemento final de la lista
      let lastItem = this.getLastItem();
      //apunto el elemento final al nuevo nodo
      lastItem.next = nodeAux;
    }
  }

  //encuentro el último elemento (apunta a null)
  getLastItem() {
    //creo puntero que apunte a la cabeza lista
    let aux = this.head;
    if (aux === null) {
      return null;
    }
    //mientras aux.next apunte a un valor distinto de null...
    while (aux.next !== null) {
      //enconces avanzo
      aux = aux.next;
    }
    //hasta dar con null, entonces retorno aux
    return aux;
  }
}

//INICIALIZAR LA LISTA RECORRIENDO UN ARRAY
let myNewList = new LinkedList();
const array = [5, 6, 9, 2, 3];
let nodeAux = new LinkedListItem(array[0]);
myNewList.head = nodeAux;
let lastItem = nodeAux;
for (i = 1; i < array.length; i++) {
  nodeAux = new LinkedListItem(array[i]);
  lastItem.next = nodeAux;
  lastItem = nodeAux;
}
