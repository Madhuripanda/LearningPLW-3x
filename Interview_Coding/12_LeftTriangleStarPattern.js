let n= 5;
for(let i=n; i>=1; i--){
    let row ="";
    for(let j= 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

//we start from n and then decresa.
//I use nested loops. The outer loop starts from n and decreases to 1, so the number of stars decreases in every row. The inner loop prints the required number of stars.