{
    console.log(a);
    let a = 10;
}

// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅

//let variables are hoisted but not initialized. The time between entering the scope and executing the declaration is called the Temporal Dead Zone (TDZ). Accessing the variable during this period throws a ReferenceError.

//If you see var, think hoisting + undefined.
//If you see let/const, think TDZ + ReferenceError.