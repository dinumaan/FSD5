// i =something; i <= something i++

// for (let kuchbe = 1; kuchbe <= 11; kuchbe = kuchbe+2) {
//     console.log(kuchbe);
// }
// 0, 1, 2, 3, 4, 5,6,7,8,9,10 => i = i+1
// 0, 2, 4, 6, 8, 10 => i = i+2
// 1,3,5,7,9,11

// something.length

// let arr = [1,2,3,4,5,6];

// console.log(arr.indexOf(3))

// function diffValueReturn(inp){
//     if(inp == 1){
//         return "bol";
//     }
//     if(inp == 2){
//         return "apple";
//     }
// }

// console.log(diffValueReturn(4));

// function someOfDigits(inp) {
//   // return the some of difits of inp
//   // 5345/10 => 534 , 5
//   // 534/10 =>  53 , 4
//   // 53/10 => 5, 3
//   // 5/10 => 0, 5
//   let sum = 0;
//   while (inp > 0) {
//     sum = sum + inp % 10;
//     inp = Math.floor(inp / 10);
//   }
//   return sum;
// }

// console.log(someOfDigits(5345));

// var, let , const
//  var => global scope
// let => block scope
// const => block scope + fixed reference

// const laptop = {
//   make: "Dell",
//   model: "Alienware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };

// laptop.make = "HP";

// console.log("Laptop specifications:");
// console.log(laptop);
// plz sole sir const why use in this obj.

// const a = 10;

// a = 20;

// console.log(a);

// let fruits = ["🍊", "🍉", "🍐", "🍈"];

// function findFruit(fruit) {
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruit == fruits[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

// findFruit('🍊');
