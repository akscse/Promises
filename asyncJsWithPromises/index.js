const promise = new Promise(function(resolve, reject){
  (function(val){
    const value = val%2;
    if(isNaN(value)){
      reject("Unexpected");
    } else if(value === 0){
      resolve("Even");
    } else if(value !== 0){
      resolve("Not Even");
    }else{
      reject("Unexpected");
    }
  })('a');
});

promise.then(function(result){
  console.log("The Result is: ",result)
}).catch(function(err){
  console.error("Err: ",err);
})
