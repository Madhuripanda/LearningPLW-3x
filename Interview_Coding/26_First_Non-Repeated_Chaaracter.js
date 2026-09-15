let s = "swiss";
let freq = {};
for(let char of s){
    freq[char] = (freq[char] || 0) +1;
}

let result = "None";
for  (char of s){
if(freq[char]===1){
    result = char;
    break;
}
}
console.log(result);