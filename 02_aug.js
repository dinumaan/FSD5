// var tmp = 10;

// var tmp1 = toString(tmp);

// console.log(typeof tmp1);

// <<
// var num = 10; //  =>  decimal number system

// console.log(num);

// let num = 5; // 0000000000101
//             // 000000000010100

// console.log(num << 4);
// _ _ _ _ _ => 2^5


// function multiplyBY2(num){
//     let ret = num << 1;
//     return ret;
// }

// let retValue = multiplyBY2(4);

// console.log(retValue);


// A function can retunrn a Function


// function outer(){
//     let counter = 0;

//     function incrementCounter(){
//         counter++;
//         console.log(`counter value is ${counter}`);
//     }

//     return incrementCounter;
// }

// let someFunction = outer();
// someFunction();
// someFunction();
// someFunction();

// let someFunction1 = outer();
// someFunction1();

// [[scope]]





// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log("counter is", counter);
//   }
//   return inner;
// }
// let innerFunction = outer();

// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
