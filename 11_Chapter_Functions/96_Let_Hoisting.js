console.log(username);
let username = "Dutta";
console.log(username);

//ReferenceError: Cannot access 'username' before initialization
//because let is hoisted but remains in the Temporal Dead Zone (TDZ) until its declaration line is reached.