// let a = 40;
// let b = 30;
// let c = a > b ? a : b;
// a = a < b ? a : b;
// b = c;
// let i = 1;
// let d;
// while (true) {
//   d = b * i;
//   if (d % a == 0) {
//     // return d;
//     break;
//   }
//   i++;
// }

// console.log(`lcm of ${a} and ${b} is : ${d}`);

// functional programming in javaScript

for (let i = 1; i <= 100; i++) {
  let num = i;
  let rev_num = 0;
  while (num > 0) {
    rev_num = rev_num * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (rev_num == i) {
    console.log(`${i} number is palindrome`);
  }
}
// 234/10 , 4
// 23/10, 40+3
// 2/3 , 430 + 2
// 432
