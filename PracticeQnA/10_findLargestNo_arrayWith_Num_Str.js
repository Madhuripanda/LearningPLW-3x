function findLargest(arr) {
    let numbers = arr.filter(item => typeof item === "number");
    return Math.max(...numbers);
}

console.log(findLargest([10, "hello", 25, "world", 50, 5]));