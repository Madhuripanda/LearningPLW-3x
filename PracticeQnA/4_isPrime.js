num = [1,3,5,9,34,5]
function isPrime(num){
    if (num <=1) return false;
    for(let i=2; i<num;i++){
        if(num% i === 0){
            return false;
        }
    }
    return true;
}


let prime = num.filter(isPrime);
let nonPrime = num.filter(num => !isPrime(num));

console.log(prime);
console.log(nonPrime);