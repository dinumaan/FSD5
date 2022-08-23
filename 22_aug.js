// let str = "comewel"
// //      c
// //     co
// //    com
// //   come
// //  comew
// // comewe
// //comewel

// for(let row = 1; row <= 7; row++){

//     for(let space = 0; space <= 7-row; space++){
//         process.stdout.write(' ');
//         // console.log(" ")
//     }

//     for(let j = 1; j <= row; j++){
//         process.stdout.write(str[j-1]);
//         // console.log(str[i]);
//     }

//     console.log("");
// }


// console.log("Dinesh"); console.log("Kumar");

const mapping = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
}

// MVI => 1000 + 5 + 1
// MIV => 1000 + 1 + 5
// let str = "MIV"


function solve(num){
    let ans = "";
    while( num > 0){
        for(let key in mapping){
            let rem = Math.floor(num/mapping[key]);
            for(let i = 0; i < rem; i++){
                console.log(key);
            }
            num = num%mapping[key];
        }
    }

}

console.log(solve(1800));