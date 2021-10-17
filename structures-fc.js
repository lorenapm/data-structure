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
