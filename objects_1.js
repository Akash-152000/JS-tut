//Singleton
// Object.create

//Object literals

const mySym = Symbol("key1")
 
const user = {
    name:"akash",
    "full name":"Akash yadav",
    age:21,
    [mySym]:"myKey1", // this is how you include symbol into object
    email:"akas@mail.com",
    isLoggedIn:false,
    noDays:["Mon","Sat"]

}

//Access can be done in 2 ways
console.log(user.name); //akash
console.log(user["name"]); // akash  // it has to be in quotes

// why we should prefer 2nd type is because of the below example
// console.log(user.full name); // this will give us errors
console.log(user["full name"]); //Akash yadav

// Object.freeze(user) // will freeze your object so now changes can be done inside the object.

user.greeting = function(){
    console.log("Hello my name is function");
}

user.greetingTwo = function(){
    console.log(`Hello my name is ${this.name}`); // this is used to access the current object
}

// console.log(user.greeting); //[Function (anonymous)]
console.log(user.greeting()); //Hello my name is function  undefined

console.log(user.greetingTwo()); //Hello my name is akash udefined