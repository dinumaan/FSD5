// let car = {
//     color: "Black",
//     speed: "120kmph",
//     brand: "Audi",
//     start: function () {
//         console.log(`Car started`);
//     }
// }

// let newCar = car;

// newCar.brand = "BMW";
// console.log(car);

// let person = {
//   name: "shirhaan",
//   favFruits: ["🍒", "🍓", " 🍉"],
//   hobbies: ["🚗", "🚒", "🚑", "🚲"],
//   address: {
//     street: "B. V Road",
//     lane: "Vaslane",
//     mobileNums: ["1234", "4567", "897"],
//   },
// };

// for(let item in person){
//     console.log(person[item]);
// }

// higher order function

// let arr = [3, 4, 12, 23, 45, 67];

// arr.push(15);
// arr.indexOf(2);

// function copm(a, b){
//     return a-b;
// }
// arr.sort(copm);

// arr.forEach( (a) => {
//     console.log(a);
// })

// arr.map();
// arr.forEach()
// arr.filter()
// arr.sort()
// arr.reduce()

// arr.push();
// arr.find();
// arr.pop();

// arr.length;

// why do we need functions ?

// write a function for square of 10 ?

// function square() {
//   return 10 * 10;
// }

// write a function for square of 16?

// function squareOf16() {
//   return 16 * 16;
// }

// write a function for sqaure of 8;

// function sqaureOf8() {
//   return 8 * 8;
// }

// DRY

// function sqaure(inp) {
//   return inp * inp;
// }

// sqaure(10);

// write a function which will return sum of 2 values ?

// function solve(a, b) {
//   return a + b;
// }

// write a function which will return mutliplaction of 2 values

// function solve(a, b) {
//   return a * b;
// }

// function solve(a, b) {
//   return a / b;
// }

// function solve(a, b, opration) {
//   if (opration == "+") {
//     return a + b;
//   } else if (opration == "*") {
//     return a * b;
//   } else {
//     return a / b;
//   }
// }

// // given an array return new array such that value of element in array is increased by 2;
// let arr = [1, 2, 3, 4];
// // [2, 4, 6, 8]
// // arr1 = [3, 4, 5, 6];

// function solve(arr, op) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (op == "+") {
//       ans.push(arr[i] + 2);
//     } else {
//       ans.push(arr[i] * 2);
//     }
//   }
//   return ans;
// }

// function solve(cb) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push();
//   }
//   return ans;
// }

// console.log(arr.map((x) => x * 2));

// console.log(solve(arr, "*"));

// arr.forEach( (x) => console.log(x) );

// function solve(arr){
//     // return sum of arr element

// }
