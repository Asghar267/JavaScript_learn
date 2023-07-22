console.log("Promise");
// promise has 3 states
// Resolve
// Pending
// Reject
function func1(){
    return new Promise(function(resolve, reject){
      setTimeout(() => {
          const error = true;
          if(!error){
              console.log("Promise has been resloved");
              resolve();
          }
          else{
              console.log("Sorry Promise has not been resloved");
              reject("Not fulfilled");
          }
      }, 3000);   
    })
}

func1().then(function(){
    console.log("thanks for Resolving")
}).catch(function(error){
    console.log("sorryy "+ error)
})