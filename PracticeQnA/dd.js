let num = [2,3,4,5,6,21,3,5,7,9,54,33,11,19,21,67,98,61,51,58,59];
function isPrime(num){
if (num<=1){
    return false;
}

for (let i=2; i<num; i++){
    if(num % i===0){
        return false;
    }

}
return true;
}
let prime = num.filter(isPrime);
let nonPrime = num.filter(num => !isPrime(num));
console.log(prime);
console.log(nonPrime);