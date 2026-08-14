//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 
//It is a function that is defined and executed immediately after its creation.
function name(){
    console.log("Hi")
}
name();

//IIFE
(function (){
    console.log("Anonymous Fn")
})();

//Arrow Crazy
(()=>{
console.log("Setup Complete")
})