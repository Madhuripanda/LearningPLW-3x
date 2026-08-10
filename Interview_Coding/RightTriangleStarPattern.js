let n= 5;
for(let i=1; i<=n; i++){
    let row ="";
    for(let j= 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}
//I used nested loops. The outer loop controls the number of rows, and the inner loop prints stars equal to the current row number. After building each row, I print it on a new line.