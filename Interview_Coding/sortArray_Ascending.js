let arr = [1,10,2,28,3,32,4,13,23];
//sort() arranges the elements of an array.
arr.sort((a,b)=>a-b);
//It converts the array into a string and puts a space between elements.
console.log(arr.join(" "));
//console.log(arr);
//[1, 3, 5, 8]

//First, I sort the array in ascending order using the sort() method. The comparison function (a, b) => a - b ensures that smaller numbers come before larger numbers. After sorting, I use join(" ") to combine all elements into a single string separated by spaces and then print the result.