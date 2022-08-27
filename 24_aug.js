let arr = [3, 5, 15, 7, 10, 19, 1];

let n = arr.length,
  min_elm = arr[0];

// for (let i = 1; i < n; i++) {
//   min_elm = Math.min(arr[i], min_elm);
// }

arr.forEach((x) => {
  min_elm = Math.min(min_elm, x);
});

console.log(min_elm);

// var, let  and const;

//  scope

// let name = "Tarun";
// var name = "Dinesh";

// function HelloTeacher(name) {
//     console.log(`Hello ${name}`);
// }

// HelloTeacher(name);

// const arr = [1, 2, 4];

// arr[0] = 5;

// arr = [];

// console.log(arr);

// const myObj = {
//     name: "Dinesh"
// }

// myObj.name = "Tarun"

// myObj = {
//     name: "Santosh"
// }

// console.log(myObj);

// {
//     let name = "Dinesh";
//     console.log(name)
// }

// console.log(name);

// name = "Dinesh";
// let name;
// console.log(name);

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// let strs = ["flower", "flow", "flight"];

// we will check common prefix of length 1
// if no common prefix return lenth-1

// let maxSize = 1000000;

// strs.forEach((x) => {
//   maxSize = Math.min(maxSize, x.length);
// });

// console.log(maxSize);

// for (let i = 1; i <= maxSize; i++) {
//   let str = strs[0].substring(0, i);

//   for (let j = 1; j < strs.length; j++) {
//     let st = strs[j].substring(0, i);
//     if (str != st) {
//       let ans = strs[0].substring(0, i - 1);
//       console.log(ans);
//       return;
//     }
//   }

//   let flag = 0;
//   strs.forEach((x) => {
//     let st = x.substring(0, i);
//     if (st != str) {
//       flag = 1;
//       let ans = x.substring(0, i - 1);
//       console.log(ans);
//       return;
//     }
//   });

//   if (flag == 1) {
//     return;
//   }
// }

// var a = 12;
// var a = 14;
// console.log(a);
