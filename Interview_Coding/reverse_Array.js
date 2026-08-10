let arr =[1,2,3,4,5];
let result = "";
for (let i=arr.length; i>=0; i--){
    result += arr[i] + " ";
}
console.log(result.trim());

//I used a reverse loop. The loop starts from the last index (arr.length - 1) and moves backward to index 0. During each iteration, I append the current element to a result string. Finally, I print the result. This prints all array elements in reverse order.