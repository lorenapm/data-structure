//crear nodo de stack

class StackItem {
  constructor(data) {
    this.data = data;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top;
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

  isEmpty() {
    return this.top === null;
  }

  print() {
    //1. creo puntero auxiliar (para recorrer stack) que apunte a top
    let aux = this.top;
    //mientras aux sea distinto de null tendré nodos para imprimir
    while (aux !== null) {
      console.log(aux.data);
      aux = aux.prev;
    }
  }

  length() {
    let aux = this.top;
    let counter = 0;
    while (aux !== null) {
      counter++;
      aux = aux.prev;
    }
    return counter;
  }
  //¿tiene el elemento?
  hasElement(element) {
    let aux = this.top;
    while (aux !== null && aux.data !== element) {
      aux = aux.prev;
    }
    return aux !== null;
  }
}

let myStack = new Stack();
myStack.push(3);
myStack.push(7);
console.log(myStack.hasElement(3));
console.log(myStack.print());
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.length());
