let str = "hello";

function isPalindrome(str){
    return str ===str.split('').reverse().join('');
}
console.log(isPalindrome(str) ? "Yes" : "No");
