// const promiseOne = new Promise(function(resolve,reject){
//     console.log("Promise fullfiled")
//     resolve();
// })

// promiseOne.then(function(){
//     console.log("Promise Resolved");
// })

new Promise((resolve,reject)=>{
    console.log("Promise 2 fulfilled");
    let error = false
    if(!error){
        resolve({name:"Akash", email:"akash@mail.com"})
    }
    else{
        reject("Error: Something went wrong")
    }
}).then((data)=>{
    console.log(data);
    return data.name
}).then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("THe promise is either resolved or rejected");
})