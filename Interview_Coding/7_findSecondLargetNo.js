let arr = [4,24,34,10,1];
let largest = -Infinity;
let secondLarget = -Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }

    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log(secondLargest);

//I used two variables: largest and secondLargest. While traversing the array, if I find a number larger than the current largest, I move the current largest to secondLargest and update largest. Otherwise, if the number is smaller than largest but bigger than secondLargest, I update secondLargest. At the end, secondLargest contains the second biggest number.