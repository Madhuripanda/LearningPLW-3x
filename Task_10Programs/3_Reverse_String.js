let str = 'Hello';
let lowerStr = str.toLowerCase();
function reverse(lowerStr){
    return lowerStr.split('').reverse().join('');
}
console.log(reverse(lowerStr));