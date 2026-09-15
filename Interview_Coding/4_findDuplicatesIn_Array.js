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
//"I used a JavaScript object as a hash map to track elements already seen. While traversing the array, if an element is already present in the object, it is a duplicate and gets printed.