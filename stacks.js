//crear nodo de stack

class StackItem {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(element) {
    //creo un nodo(puntero aux apunta al element-value y el prev al null)
    let aux = new StackItem(element);
    //apunto al nodo anterior
    aux.prev = this.top;
    //paso 2: apunto el top al nuevo item
    this.top = aux;
  }

  pop() {
    if (this.top !== null) {
      this.top = this.top.prev;
    } else {
      console.log("Stack is empty");
    }
  }
}

let myStack = new Stack();
