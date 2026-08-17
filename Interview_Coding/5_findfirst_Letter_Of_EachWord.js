let str = "Hello World Welcome to Java";
let result = str.trim().split(/\s+/).map(word => word[0]).join();
console.log(result);
//H,W,W,t,J--Because join() without an argument uses a comma , by default.

let str1 = "Hello World Welcome to Java";
let result1 = str1.trim().split(/\s+/).map(word => word[0]).join('');
console.log(result1);