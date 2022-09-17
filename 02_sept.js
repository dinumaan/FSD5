// curying function ?
// Functional JavaScript

// pure function  =>

// 1. output should be stateless/ cahceless
// 2. no change in the data

// const add = (a, b, c) => {
//   return a + b + c;
// };

// const curryAdd = (sum) => {
//   return (a) => {
//     return (b) => {
//       return (c) => {
//         return sum(a, b, c);
//       };
//     };
//   };
// };

// const addition = curryAdd(add);
// console.log(addition(1)(2)(3));

// IIFE

// fuction expression and function declaration

// function declaration => hositing allowed

// function add(a, b) {
//   return a + b;
// }

// function expression => not allowed

// const add1 = (a, b) => a+b;

// console.log(((a, b) => {
//   return a + b;
// })(2, 4));

// console.log(add1(2, 3));

// Hoisting =>

// 1. Write an efficient algorithm to search a value in a
//  2D matrix in which the rows are in sorted order and the first integer
//  of each row  is greater than the last integer of the previous row.
