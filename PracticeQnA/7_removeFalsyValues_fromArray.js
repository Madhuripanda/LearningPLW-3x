let arr= [0,1,"",2, null, undefined, NaN,3];
    function removeFalsyValues(arr){
        return arr.filter(Boolean);

}
console.log(removeFalsyValues(arr));


// filter() keeps elements that return true.
// Boolean() converts each value to true or false.
// All falsy values are removed.