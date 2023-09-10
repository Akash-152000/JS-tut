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