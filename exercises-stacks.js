// import { Stack } from "@datastructures-js/stack";
const { Stack } = require("datastructures-js");

/**
 * Ref: https://www.educative.io/blog/level-up-javascript-coding-challenges#balanced-brackets
 *
 * Task description: Given a string possibly containing three types of braces ({}, [], ()), write a
 * function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
 * Expected Result:
 * - "This a test (detailing [balanced] brackets)" => true
 * - "This a test (detailing [balanced brackets)" => false
 * Restriction: Use only arrays as data structures to solve the problem
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const balanced = (input) => {
  let openers = ["(", "{", "["];
  let closers = [")", "}", "]"];

  let relation = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = new Stack();

  //recorro la pila
  for (let char of input) {
    //si son de apertura los vamos guardando
    if (openers.includes(char)) {
      stack.push(char);
    }
    if (closers.includes(char)) {
      //si es de cierre, lo comparamos con el último(primero hay que sacarlo)
      let last = stack.pop();
      //el de apertura (last) tiene que ser igual al cierre del que estoy viendo. Si no son iguales, doy por terminada con false
      if (relation[last] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

let test1 = "This a test (detailing [balanced] brackets)";
console.log(test1, "=>", balanced(test1));

let test2 = "This a test (detailing [unbalanced brackets)";
console.log(test2, "=>", balanced(test2));
