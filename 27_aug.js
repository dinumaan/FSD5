// map[num] = (map[num] || 0) + 1

// const map = {

// }
// const anyName = {
//   Dinesh: 1,
//   Kultaj: 2,
//   Santhosh: 3,
// };

// for (let key in anyName) {
//   console.log(anyName[key]);
// }
// let num = "newKey";

// anyName[num] = (anyName[num] || 0) + 1;

// console.log(anyName);

// let arr = [2, 3, 45, 23];
// arr[3]

// let score = {
//     Dinesh: 100,
//     Kultaj: 98,
// }

// score[Kultaj] // logn

// map  => red black tree/ AVL / Binary Search Tree

// 2 < 3 < 5 < 6 < 4 < 8 < 1 < 7 < 9 < 0 => order

// [0 1 2 3 9 5 6 2 8 1 9]

// 2 2 3 5 6 8 1 1 9 9 0

let arr = [
  [2, 9, 4],
  [7, 5, 3],
  [6, 1, 8],
];

//  c-1 : #rows == #cols

if (arr.length != arr[0].length) {
  console.log("Not Magic Squre failed in c-1");
  return;
}

// c-2 : all elements should be diff

const freq = {};

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    freq[arr[i][j]] = (freq[arr[i][j]] || 0) + 1;
  }
}
console.log(freq);

for (let key in freq) {
  if (freq[key] > 1) {
    console.log("Not Magic Squre failed in c-2");
    return;
  }
}

// c-3: sum of row  == sum of col  == sum diag

const map = {};

// sum of rows
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[i][j];
  }
  map[sum] = (map[sum] || 0) + 1;
}

// sum of cols
for (let j = 0; j < arr.length; j++) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][j];
  }
  map[sum] = (map[sum] || 0) + 1;
}

// sum of diag
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i][i];
}
map[sum] = (map[sum] || 0) + 1;

let numOfKeys = 0;

for (let key in map) {
  numOfKeys++;
}

if (numOfKeys == 1) {
  console.log("Magic Squre");
}else{
    console.log("Not Magic Squre");
}
