let year  = 2024;

if (year % 400 === 0) {
    console.log("YES")
}
else if (year % 100 === 0) {
    console.log("NO")
}
else if(year % 4 === 0)
{
    console.log("YES")
}
else{console.log("NO")}