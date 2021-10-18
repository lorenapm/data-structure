// ["Madrid", "Bilbao"][("Bilbao", "Santander")][("Santander", "Paris")][
//   ("Paris", "Buenos Aires")
// ];

let set1 = new Set(["Madrid", "Bilbao", "Santander", "Paris"]);
let set2 = new Set(["Bilbao", "Santander", "Paris", "Buenos Aires"]);

// Set.prototype.difference = function (setB) {
//   var difference = new Set(this);
//   for (var elem of setB) {
//     difference.delete(elem);
//   }
//   return difference;
// };

const initialOrigin = new Set([...set1].filter((x) => !set2.has(x)));

const lastDestinity = new Set([...set2].filter((x) => !set1.has(x)));
