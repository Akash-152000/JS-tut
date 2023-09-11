const array1 = [1,2,3,4,5,6]
const array2 = ["batman","superman"]

const array3 = new Array(9,8,7,6)

// console.log(array3);
array1.push(10)
// console.log(array1);
// array2.pop()
// console.log(array2);


array1.unshift(200) // abd practice as it shifts the whole array by 1 index consider a array with 10000 indexes, it would be hard on your computer
array1.shift() // removes value from 0 index
// console.log(array1);


// question that you can ask to array
// console.log(array1.includes(8)); // false
// console.log(array1.indexOf(8)); // -1
// console.log(array1.indexOf(3)); // 2


const newArr = array1.join(array2)

// console.log(newArr); // returns string 1batman,superman2batman,superman3batman,superman4batman,superman5batman,superman6batman,superman10


const a1 = array1.slice(1,3) // gives the array from start index to metioned index -1 original array remains unchanged
// console.log(array1,a1);

// const a2 = array1.splice(1,3) // includes last index and removes the elements from original index
// console.log(array1,a2);