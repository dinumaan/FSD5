let order = [2, 3, 5, 6, 4, 8, 1, 7, 9, 0];
let arr = [0, 1, 2, 3, 9, 5, 6, 8, 1, 9];
let op = [];

order.forEach(  (i) => {
    let cnt = 0;
    
    arr.forEach( (j) => {
        if(j == i) cnt++;
    })

    while(cnt--){
        op.push(i);
    }
}) 

console.log(op);