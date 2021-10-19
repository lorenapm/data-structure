/**
 * Ref: https://medium.com/@andrey.igorevich.borisov/10-javascript-exercises-with-arrays-c44eea129fba
 *
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Restriction: Use only arrays as data structures to solve the problem
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const unique2 = (array) => Array.from(new Set(array));

const data = [1, 2, 1, 2, 3];

console.log(unique2(data));

const unique = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

// const intersection = (...arrays) => {
//   // Complete
//   const result = [];
//   let first = arrays[0];
//   for (let i = 0; i < first.length; i++) {
//     const element = first[i];
//     //truco para acumular las respuestas true que nos van dando, asumimos que está en un principio (true) y luego le agregamos otra condición
//     let includedInAll = true;

//     arrays.forEach((array) => {
//       includedInAll = includedInAll && array.includes(element);
//     });
//     if (includedInAll) {
//       result.push(element);
//     }
//   }
//   return unique(result);
// };

const intersection = (...arrays) => {
  let shortest = arrays.sort((a, b) => (a.length > b.length ? 1 : -1))[0];
  return unique(
    shortest.filter((element) =>
      arrays.every((array) => array.includes(element))
    )
  );
};

const arr1 = [1, 2];
const arr2 = [2, 3];
//console.log(intersection(arr1, arr2)); // [2]

const arr3 = ["a", "b"];
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];
console.log(intersection(arr3, arr4, arr5)); // ['b']

const arr6 = ["b", "b", "e"];
const arr7 = ["b", "c", "e"];
const arr8 = ["b", "e", "c"];
console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
