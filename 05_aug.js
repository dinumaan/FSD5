// Item delivery needs to take place for a circle of size B. Suppose we start from the position C (given) then find the position where the Ath item will be delivered.
// Note: Distribution of Items are performed at the adjacent positions starting from C.
// Expected Input: Three integers A, B, C
// Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C.

// Example-1:
// Input
// 2,5,1
// Output
// 2

// let b = 10, c  = 4, a = 10;
// let e = (a+c-1)%b == 0 ? b : (a+c-1)%b;

// let e;
// if ((a + c - 1) % b == 0) {
//   e = b;
// } else {
//   e = (a + c - 1) % b;
// }
// console.log(e);

object.freeze()
