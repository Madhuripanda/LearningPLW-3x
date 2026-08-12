// Type 1 - No param, No Return -> final retunr undefined.
// Define
function greet(){
    console.log("Hi");
}
// No Param and no Return (void)
// Call
greet();
greet();

let output = greet();
//executes Hi 
console.log(output);
//no return statement thus gives undefined.
function openBrowser(){
    console.log("Open Browser");
}