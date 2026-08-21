let n = 5;
function fibonacci(n){
    if(n<=0){
        return[]
    }
    if(n===1){
        return[0];
    }
    let sequence =[0,1];
    for (let i=2; i<n; i++){
        let next = sequence[i-1]+sequence[i-2]
        sequence.push(next);
    }
    return sequence;
}
console.log(fibonacci(n));