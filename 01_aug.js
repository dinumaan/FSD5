// Zahid's Doubt

// IIFE => imediatly invoked function expression

// var newYear2022 = ( function(y) { return y*y;}(20));

// // (function(x) {
// //     console.log(x*x);
// //     return x*x;
// // })(10);

// console.log(newYear2022);

// Vikrant's Doubt

// var age = "CAT";
// console.log(age);
// let l = age.length;
// for (let i = l; i >= 0; i--) {
//   console.log(i);
// }

// let age = prompt("Please enter String");
// console.log(age);
// let l = age.length;
// for (let i = l; i >= 0; i--) {
//   console.log(i);
// }

// let no = 131;
// let rev = 0;
// let r, tmp_no = no; 
// while (no > 0) {
//   r = no % 10;
//   rev = rev * 10 + r;
//   no = parseInt(no / 10);
// }

// console.log(rev);
// if (tmp_no == rev) {
//   console.log(" it is palindrome no");
// } else {
//   console.log(" it is not a palindrome no");
// }

// clouser => (scope and execuation context)

// principle of javaScript 
// JavaScript execuate code line by line => thread of execuation 
// call stack => to keep track in which thread of execuation is 
// javaScript save our code and data in => memory 

// let someData = 1000;

// function sqaure(x){
//     let ret = x*x;
//     return ret;
// }

// let retValue = sqaure(2);

// // console.log(retValue);


// // let num = 10;

// // function multiplyBY2(x){
// //     inner();
    
// //     let ret = x*2;
// //     return ret;

// //     function inner(){
// //         console.log("Hii from innner function !");
// //     }

    
// // }

// // function can return function as well 

// function outer(){
//     let counter = 0;
//     function inner(){
//         counter++;
//         console.log("counter is", counter);
//     }
//     return inner;
// }

// let innerFunction = outer();

// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
