// 1D array,list - duplicate element
let results = ["pass", "fail", "pass"];



// 2D — array of arrays (like a table/grid)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



/*let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i=0; i<3; i++){
    for (let j=0; j<3; j++){
    process.stdout.write(grid[i][j]+ "");
    }
    console.log("");

}*/

let grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i=grid1.length-1; i>=0; i--){
    for (let j = grid1[i].length - 1; j >= 0; j--){
        process.stdout.write(grid1[i][j]+ " ");
    }
    console.log("");
}


let mad = [
    [1,2,3,4] //1x4
]
 
    
console.log(mad.length);

for(let i= mad.length-1; i>=0; i--){
    for (let j=mad[i].length-1; j>=0; j--){
process.stdout.write(mad[i][j]+" ");
    }
    console.log("")

}