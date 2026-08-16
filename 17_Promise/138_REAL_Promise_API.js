let apiCall = new Promise(async function(resolvr, reject){
    reject("500 Error");
});
apiCall.then(function(data){
    console.log("Data is sucess!")
}).catch(function(error){
    console.log(error)
});

// .catch() runs ONLY when the promise is rejected.
//  .then() is completely skipped.