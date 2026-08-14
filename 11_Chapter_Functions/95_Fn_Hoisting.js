// Step 1 - Defination of functions
function getUserStatus(){
    // var status_code = undefined; - not shown to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}

// Step 2 - Calling of the functions
getUserStatus();

//var declarations are hoisted and initialized with undefined. Therefore, accessing a var variable before its assignment does not throw an error; it returns undefined.

//because let is hoisted but remains in the Temporal Dead Zone (TDZ) until its declaration line is reached.