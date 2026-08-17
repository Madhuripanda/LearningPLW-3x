let arr = [5,3,2,5,3,4,2,1,1,3];
let freq = {};
for (let i=0; i<arr.length; i++){
    if(freq[arr[i]]){
        freq[arr[i]]++;
    }else{
        freq[arr[i]]=1;
    }
}
for (let key in freq) {
    console.log(`${key} appears ${freq[key]} times`);
}

//Interview Answer

//This code is used to count the frequency of elements in an array. We create an empty object called frequency. As we iterate through the array, each element becomes a key in the object. If the key already exists, we increment its count. Otherwise, we initialize its count to 1.