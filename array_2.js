const arr1 = ["a","b","c","d"]
const arr2 = ["e","f","g","h"]

// arr1.push(arr2)
// console.log(arr1); //[ 'a', 'b', 'c', 'd', [ 'e', 'f', 'g', 'h' ] ]

// arr1.concat(arr2) // returns a new arr and doesnot modify the same array
// console.log(arr1); //[ 'a', 'b', 'c', 'd' ]

// const arr3 = arr1.concat(arr2) // can only concat 2 array at one time
// console.log(arr3); //['a', 'b', 'c','d', 'e', 'f','g', 'h']
    
// bext way is to use spread operator

const arr4 = [...arr1, ...arr2,"i"] // can add more array elements
// console.log(arr4); //['a', 'b', 'c','d', 'e', 'f','g', 'h']

const arr5 = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13]],14]
// const arr6 = arr5.flat(1) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, [ 12, 13 ], 14 ] flat takes argument as level
const arr6 = arr5.flat(Infinity)
// console.log(arr6); 

console.log(Array.isArray("Akash")); // false
console.log(Array.from("Akash")); //[ 'A', 'k', 'a', 's', 'h' ]
console.log(Array.from({name:"akash"})) //[]

let a=1
let b=2
let c=3

console.log(Array.of(a,b,c)); [ 1, 2, 3 ]
