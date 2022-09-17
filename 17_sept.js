let str = "ABCD";

let n = str.length;


function solve(a){
    // return array of perumations of a
    let ans =  [];

    if(a.length == 1){
        ans.push(a);
        return ans;
    }

    for(let i = 0; i < a.length; i++){
        
        let str1 = "";

        for(let i1 = 0; i1 < a.length; i1++){
            if(i1 != i)
                str1 = str1 + a[i1];
        }

        let tmp = solve(str1);

        for(let j = 0; j < tmp.length; j++){
            ans.push(a[i] + tmp[j]);
        }
    }

    return ans;
}

let ret = solve(str);

console.log(ret.length);


