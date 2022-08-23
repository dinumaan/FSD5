// 1. Write code for creating a new sorted array from two sorted arrays 
// in O (n + m) time complexity where n and m are the size of the unsorted arrays.

// let a = [3, 3, 8, 10 , 15, 21, 30]
// let a = [1,1,2]
// let b = [4, 5, 14, 15, 18, 27]

// let n = a.length, m = b.length;
// let c = [];

// let i = 0, j = 0;

// while( i < n && j < m){
//     if(a[i] < b[j]){
//         c.push(a[i]);
//         i++;
//     }else{
//         c.push(b[j]);
//         j++;
//     }
// }

// // remaining part 
// while( i < n){
//     c.push(a[i]);
//     i++;
// }

// while(j < m){
//     c.push(b[j]);
//     j++;
// }

// console.log(c);

let A = [];

for( let i = 0; i < n; i++){

    let leftSum = 0;

    for(let j = 0; j <= i-1; j++){
        leftSum += A[j];
    }

    let rightSum = 0; 

    for(let j = i+1; j < n; j++){
        rightSum += A[j];
    }

    if(leftSum == rightSum){
        console.log(i);
        return;
    }
}
