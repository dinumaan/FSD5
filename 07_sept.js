// recursive // top to bottom

// function sum(N){
//     // return sum of N natural number 
//     if(N == 0){
//         return 0;
//     }
//     return N + sum(N-1)
// }


// console.log(sum(10)); // n*(n+1)/2

// sum(1) => 1

// sum(2) => 2 + sum(1)
// sum(3) => 3 + sum(2)

// itrative solution // bottom to top

// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     sum += i;
// }

// console.log(sum);

// fibonachi number

// recursive // top to bottom

// function fib(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){
//         return 1;
//     }

//     return fib(n-1) + fib(n-2);
// }

// console.log(fib(5));

// itrative // bottom to top

// let fib = [];

// fib.push(0); // fib[0] => 0

// fib.push(1); // fib[1] => 1;

// for(let i = 2; i <= 5; i++){
//     fib[i] = fib[i-1] + fib[i-2];
// }

// console.log(fib[5]);

let ans = [];
function solve(str, n){
    if(n == 0){
        if(ans.indexOf(str) == -1 ) ans.push(str);
        return;
    }
    solve( "()" + str, n-1);
    solve( str + "()", n-1);
    solve( "(" + str + ")", n-1);
}

solve("", 3);
console.log(ans);









