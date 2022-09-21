function solve(s, l, r){
    
    if(l >= r){
        console.log("yes !");
        return;
    }
    
    if(s[l] == s[r]){
        return solve(s, l+1, r-1);
    }else{
        console.log("No :( ");
        return;
    }
}

solve("ababa", 0, 4);