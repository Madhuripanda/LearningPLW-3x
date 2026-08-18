let arr = [2,4,6,7,9,22,4,94]
function findmaxDifference(arr){
if (arr.length< 2){
    return 0;
}
let minVal =arr[0];
let maxVal = arr[0];
for (let i =1; i<arr.length;i++){
    if (arr[i] < minVal){
        minVal = arr[i];
    }else if (arr[i]> maxVal){
        maxVal = arr[i];
    }
}
return maxVal - minVal;
}
console.log(findmaxDifference(arr));


//
let num =[2,33,44,22,33,55,4,3,66];
function diff(num){
    return Math.max(...num)- Math.min(...num);
}
console.log(diff(num));
