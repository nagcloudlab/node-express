// const greet = require("nagcloudlab-dec-greet"); // cjs
// const _ = require("lodash"); // cjs

// greet.en(); // greet in english
// greet.es(); // greet in spanish

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 8, 9, 10];

// // compare arr1 and arr2 , find the difference in arr1
// // let diff = arr1.filter((x) => !arr2.includes(x));
// let diff = _.difference(arr1, arr2);
// console.log(diff);

import { add, subtract } from "./pack1/calc.js"; // esm
console.log(add(10, 5)); // 15
console.log(subtract(10, 5)); // 5
