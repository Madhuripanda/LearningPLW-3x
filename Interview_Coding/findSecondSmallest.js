let arr = [12, 3,99,2,9];
let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    }

    else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
    }
}

console.log(secondSmallest);
















//I used two variables: smallest and secondSmallest. While traversing the array, if I find a number smaller than the current smallest, I move the current smallest to secondSmallest and update smallest. Otherwise, if the number is greater than smallest but smaller than secondSmallest, I update secondSmallest. After the loop, secondSmallest contains the second smallest number.