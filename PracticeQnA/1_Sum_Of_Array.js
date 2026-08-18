//Best one resuable function
arr = [1,2,3]
function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
}
console.log(sumArray(arr));


//2nd method- normal method
arr1 =[1,2,3];
let sum = arr.reduce((acc, curr)=> acc+curr,0);
console.log(sum);

//3rd method--not reusable--one tym calculation.
arr2 =[1,2,3];
let ok = arr2.reduce(function(acc, student){
    acc = acc+student;
    return acc;
},0);
console.log(ok);

