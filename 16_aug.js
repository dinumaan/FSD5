// << and <<<
//  a, b, c
// a-1, b-1, c-1
// a-2, b-2, c-2
// a-3, b-3, c-3
// a-4, b-4, c-4
let a = 3, b = 5, c = 2;
// let ans = 0;
// while(a && b && c){
//     a--;
//     b--;
//     c--;
//     ans++;
// }

// console.log(ans);

// (a+b)^2
// console.log((a+b)*(a+b));
// // let a = 2 , b = 3;
// console.log(a*a + 2*a*b + b*b);
// const curry = 
//     f = (x, y) => x+y;
let arr = ['3', '4', '2', '12', '14'];
// function addTwo(x) {
//     return x+2;
// }
// let narr = arr.map(addTwo);
// let val = arr.reduce( (x, y) => x+y, 0);
// console.log(val);

// arr.forEach((x) => {process.st.write(x)});
function printDetails({name, address: {state}}){
    console.log(name, state);
}

const myObj = {
    name: "Dinesh Kumar",
    btach: "FSD5",
    address: {
        state: "Rajasthan",
        phoneNumber: "8000693002"
    }
}

printDetails(myObj);




