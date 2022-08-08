// what is data structure ?

//  what is variable ? => some loction in memory

//  vikrant // 0xfff3536 => identifier
// let name = "vikrant"; // string , number
// let rollNumber = 10;

// collection of data => data structure
// how we are stroing data in memory ?
// what is the structure of your data?
// does it structure of data matters ?
// how to decide what kind of structure of i should use for my data ?
//  Array => you just want to store your data in linear structure

//  Two types of memory models
// array based => contious allocation of memory
// pointer based => random allocation of memory

//  what is the function of CPU ?

//  fetch instruction => decode the instruction => exectuate the inststuction => store the result in memory

//  Oprations that we can do on array data structure
// 1. add(x) => insert the x in array => in the end ? beginning ? middle ?
// 2. search(x) => wheather x is present in the array or not
// 3. remove(x) => remove the x if x is present

//  in JavaScript
//  add(x) in the end  => push(x);
// search(x) => indexOf(x) // return the indexOf x if x is present otherwise return -1;
// remove in the end  => pop();

//  Execercise
// try add element in array int the beginng and middle
//  tyr to remove element in array that is not last element

// function isPalindrome(num) {
//   let temp = num;
//   let reverse = 0;

//   while (temp != 0) {
//     reverse = reverse * 10;
//     let digit = temp % 10;
//     reverse = reverse + digit;
//     temp = Math.floor(temp / 10);
//   }
//   if (num == reverse) {
//     return true;
//   }
//   return false;
// }

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for(let i = 1; i <= 50; i++){
//     if(isPalindrome(i) && isPrime(i) ){
//         console.log(i);
//     }
// }

// function printNotoString(N) {
//   let str = " ";
//   str = N.toString();
//   for (let i = 0; i < str.length; i++) {
//     let t = str.charAt(i);
//     let cn = parseInt(t);
   
//     switch (cn) {
//       case 0:
//         console.log("zero");
//         break;
//       case 1:
//         console.log("one");
//       case 2:
//         console.log("two");
//       case 3:
//         console.log("three");
//       case 4:
//         console.log("four");
//         break;
//       case 5:
//         console.log("five");
//         break
//       case 6:
//         console.log("six");
//       case 7:
//         console.log("seven");
//       case 8:
//         console.log("eight");
//       case 9:
//         console.log("nine");
//     }
//   }
// }

// printNotoString(55);
