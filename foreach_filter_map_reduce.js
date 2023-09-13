const arr = [1,2,3,4,5]

arr.forEach((item)=>{
    // console.log(item); //1,2,3,4,5
})

// forEach does not return any value

const newArr = [1,2,3,4,5,6,7,8,9,10]

// const filteredNum = newArr.filter((item)=>{
//     return item > 4
// })

// console.log(filteredNum); //[ 5, 6, 7, 8, 9, 10 ]

const filteredNum = newArr.filter((item)=> item>4)