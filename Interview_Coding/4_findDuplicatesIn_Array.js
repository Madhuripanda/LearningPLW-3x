let arr = [6,1,2,3,4,2,1];
let count = {};
let found = false
for(let i=0; i<arr.length; i++){
    if(count[arr[i]]){
        console.log(arr[i]);
        found = true;
    }else{
        count[arr[i]]=1;
    }
}
if (!found) {
    console.log("No duplicates found");
}