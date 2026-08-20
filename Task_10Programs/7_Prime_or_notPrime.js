let num= [2,4,5,9]
function isPrime(num){
if(num<=1){
    return false;
}
for(let i=2; i<num; i++){
    if(num% i === 0){
        return false;
    }
}
return true;
}
let prime = num.filter(isPrime);
let nonPrime = num.filter(num => !isPrime(num));

console.log("Prime :" + prime);
console.log("Non-Prime :" + nonPrime);