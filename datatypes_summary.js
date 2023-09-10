// 2 types of datatypes: Primitive and Reference(non-primitive)

// Primitive: String, Number, BigInt, Boolean, null, undefined, Symbol

const numberVal = 100
const numberAnotherVal = 100.3

const stringVal = "abc"
const stringAnotherVal = "100"

const nullVal = null;

const undefinedVal = undefined;

const bigVal = 123456789n;

const boolVal = true;

const id = Symbol("123");


// Reference: Array, object, functions, 

const arrayOfNum = [1,2,3];

const user ={
    id:1,
    name:"akash"
}

const myFunc = function (){
    console.log("Hello World");
}

console.log(typeof bigVal);             //bigint
console.log(typeof null);               //object
console.log(typeof undefinedVal);       //undefined

console.log(typeof arrayOfNum);         //object
console.log(typeof myFunc);             //function(object function)
console.log(typeof user);               //object


// ----------------------------------------------- Memory------------------------------------------

//Stack (Primitive datatypes) 
// Heap (non- primitive datatypes)


// in primitive dataypes when value is assigned to a variable and then another variable is assigned the forst variable
// it recieves a copy of the variable

let a = 1;
let b = a;
b=2;
console.log(a,b); // 1 2 (as b recieved copy of 'a' not actual reference to 'a' )

// in reference datatypes  each variables gets the reference of the value which is stored in heap
// if two variables are equal then they can change the value in memory respectively

let user1 = {id:1,name:"akash"};
let user2 = user1; //user2 recieved reference of the value stored in user1 so any changes in user2 will reflect on user1
user2.name="jay"
console.log(user1,user2);