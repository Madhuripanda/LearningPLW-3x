let str = 'Madam';
let lowerStr = str.toLowerCase();

function isPalindrome(lowerStr){
    return lowerStr === lowerStr.split('').reverse().join('');
}
console.log(isPalindrome(lowerStr));