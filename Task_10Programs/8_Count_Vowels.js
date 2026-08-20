let str = "JavaScript";
let newStr = str.toLowerCase();
let count =0;
for (let char of newStr){
    if ("aeiou".includes(char)){
        count++
    }
}
console.log(count);