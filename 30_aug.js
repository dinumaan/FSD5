// sir explain how to sort string in decending order?

// let str = ["abcd", ] // lexigraphic compersion  => dicitonary order

// let str = ['c', 'd', 'b', 'a', 'a'];
// let arr = [4, 5, 34, 1, 2, 32, 67]

// str.sort( (a, b) => {
//     if(a > b){
//         return -1;
//     }

//     if(a < b){
//         return 1;
//     }

//     return 0;
// })

// console.log(str);

// Write a program to find the second smallest number from array using loops concept
// let arr = [11,34,54,22,13,78]

// let smallest = arr[0], secondSmallest = 10000;

// arr.forEach( (x) => {
//     if(smallest > x){
//         smallest = x;
//     }
// })

// arr.forEach( (x) => {
//     if(x != smallest && secondSmallest > x){
//         secondSmallest = x;
//     }
// })

// console.log(secondSmallest);

// let arr1 = [1,2,3];

// let mappedArray = arr1.map( (x) => x+2)

// console.log(mappedArray)
// // Output -> 13

// "1) Given an array having 0,1 as input. We need to write a function that sorts the array in ascending order without using inbuilt sort function
// let arr = [0,1,1,0,1,0,0,1]
// Output -> [0,0,0,0,1,1,1,1]

// let zeros = 0, ones = 0;

// arr.forEach( (x) => {
//     if(x == 1){
//         ones++;
//     }else{
//         zeros++;
//     }
// })

// let newArray = [];

// for(let i = 0; i < arr.length; i++){
//     if(i < zeros){
//         newArray.push(0);
//     }else{
//         newArray.push(1);
//     }
// }

// console.log(newArray)

// function second_Smallest(arr) {
//   var arr = [1, 6, 21, 5, 2, 9];
//   var smallest = arr[0];
//   var secondSmallest = arr[1];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < secondSmallest) {
//       secondSmallest = arr[i];
//     }
//   }

//   return secondSmallest;
// }
