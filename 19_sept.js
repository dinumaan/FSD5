// 33. Consider the following JavaScript statement containing regular
// expressions and check if the pattern matches.
// var text = "testing: 1, 2, 3";
// var pattern = /d+/g;
// a)text.check(pattern)
// b)pattern.test(text)
// c)text==pattern
// d)text.equals(pattern)

// var obj = {
//   length: 20,
//   height: 35,
// };
// if (‘breadth' in obj === false)
// {
// obj.breadth = 12;
// }
// console.log(obj.breadth);

// console.log("breadth" in obj);

// for (let i in obj) {
//   console.log(i);
// }

function solve(a, b){
      
    if(b == 0){
        return 1;
    }

    let x = solve(a, Math.floor(b/2));

    if(b%2 == 0){
        return x*x;
    }else{
        return x*x*a;
    }
}

console.log(solve(2, 4));
