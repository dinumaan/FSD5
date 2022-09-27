let n = 1e8;

let arr = [];

function preCompute(){
	arr.length = n+1;
	arr.fill(1);
	for(let i = 2; i <= n; i++){
		if(arr[i] == 1){
			for(let j = i+i; j <= n; j += i){
				arr[j] = 0;
			}
		}
	}
}


preCompute();

function checkPrime(x){
	if(arr[x] == 1){
		console.log(`prime`);
	}else{
		console.log(`not prime`);
	}
}


for(let k = 2; k <= 1e7; k++){
	checkPrime(k);
}







