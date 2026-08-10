let arr = [12,34,10,1];
let smallest = arr[0];
for(let i=1; i<arr.length;i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log(smallest);

//I initialize the first element as the smallest value and iterate through the remaining elements. Whenever I find an element smaller than the current smallest value, I update it. After the loop ends, the variable smallest contains the minimum element in the array.