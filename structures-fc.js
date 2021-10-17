//LISTAS
//1.creo la clase de cada node o item
class LinkedListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  //recorrer la lista y mostrarla o imprimirla
  printList() {
    //1. creo un puntero auxiliar y lo apunto a head de la lista
    let aux = this.head;
    //2.la recorro con un while: condición: recórrela hasta que llegues al final (es decir, hasta que next apunte a null)
    //3. AVANCE: le digo que el puntero auxiliar es = aux.next
    while (aux.next !== null) {
      console.log(aux.value);
      aux = aux.next;
    }
  }
}

//2.creo la lista que guardará el primer elemento de la lista, apuntando a null
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

//INICIALIZAR LA LISTA RECORRIENDO UN ARRAY
let myNewList = new LinkedList();
const array = [5, 6, 9, 2, 3];
let nodeAux = new LinkedListItem(array[0]);
myNewList.head = nodeAux;
let lastItem = nodeAux;
for (i = 1; i < array.length; i++) {
  let nodeAux = new LinkedListItem(array[i]);
  lastItem.next = nodeAux;
  lastItem = nodeAux;
}
