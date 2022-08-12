// Program to demonstrate destructuring in nested objects
// meaning of this

// function someFunctionalityWithNameAndaddress({name, personalDetails:{address}, skills: {cpp}}){

//     console.log(`Hii ${name} from ${address} level in cpp is ${cpp}`);
// }

// let myObj = {
//     name: "Dinesh",
//     Class: "FSD5",
//     personalDetails: {
//         mobileNo: "2134343",
//         address: "kerla, India"
//     },
//     skills: {
//         cpp: "expert",
//         js: "medium",
//         dsa: "medium"
//     }
// }
// someFunctionalityWithNameAndaddress(myObj);

//Problem 6 Program the largest among three numbers
// let  firstNumber = 56;
// let secondNumber = 84;
// let thrirdNumber = 15;
// let  largestNumber = 0;

//check the condition
// if (firstNumber >= secondNumber && firstNumber >= thrirdNumber) {
//   largestNumber = firstNumber;
// } else if (secondNumber >= thrirdNumber) {
//   largestNumber = secondNumber;
// } else {
//   largestNumber = thrirdNumber;
// }
// //display the result
// console.log("The largest value of number is " + largestNumber);
// let a = 12, b = 44, c = 2;

// console.log(Math.min(a, Math.min(b, c)));

// let person = {
//   name: "mo shadab",
//   Age: "23",
//   faveFruit: ["🍏", "🍍", "🍎"],
//   addres: {
//     street: "B.V road",
//     mobile: ["244", "465", "970"],
//   },
// };

let person = {
  name: "mo shadab",
  Age: "23",
  faveFruit: ["🍏", "🍍", "🍎"],
  addres: {
    street: "B.V road",
    mobile: ["244", "465", "970"],
  },
};

// person.addres.mobile
// element.

for(let element in person){
    console.log(person[element]);        
}
