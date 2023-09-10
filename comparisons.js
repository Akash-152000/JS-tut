console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) // true

// the reason is that == and >,<,>=,<= work differently
// Comparisons conver null to a number , treating it as 0, that's why line one and 3 are correct as they converted null into 0
// on the other hand == does not convert null to 0 hence returns false