let arr =[1,2,3,4,5,6,7,8,9];
const evens = arr.filter(nums => nums % 2 == 0);
const odds = arr.filter(nums => nums % 2 != 0);

console.log(`Even Numbers: ${evens.join(" ")} `);
console.log(`Odd Numbers: ${odds.join(" ")} `);