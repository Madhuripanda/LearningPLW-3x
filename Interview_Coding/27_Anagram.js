let s1 = "listen";
let s2 ="silent";

const str1 = s1.split('').sort().join('');
const str2 = s2.split('').sort().join('');

if(str1 === str2){
    console.log("YES");
}
else{
    console.log("NO")
}