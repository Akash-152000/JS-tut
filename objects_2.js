const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj4  = Object.assign({},obj1,obj2,obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//First value is target and further objects are source, here {} is target and obj,obj2,obj3 are source
// console.log((obj4));

// best synatx for object conactination
// just like array use spread operator
const obj5 = {...obj1,...obj2,...obj3} 
// console.log((obj5)); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const user ={
    name:"Akash",
    email:'akash@mail.com',
    isLoggedIn:false
}

console.log(Object.keys(user)); // [ 'name', 'email', 'isLoggedIn' ]
console.log((Object.values(user))); // [ 'Akash', 'akash@mail.com', false ]
console.log(Object.entries(user)) //[ [ 'name', 'Akash' ], [ 'email', 'akash@mail.com' ],[ 'isLoggedIn', false ] ]
console.log(Object.hasOwnProperty('name')); // true