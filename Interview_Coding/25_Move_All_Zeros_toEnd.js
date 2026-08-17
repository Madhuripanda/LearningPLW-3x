let arr = [0, 1,0, 3,12];

let nonZero = [];
let zeros = [];
for (let num of arr){
    if (num === 0){
        zeros.push(num);
    }else{
        nonZero.push(num);
    }
}

let result = nonZero.concat(zeros);
console.log(result.join(''));