// forOf loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello"

for (const greet of greetings) {
    // console.log(greet);
}

/////////////////////////////// Map ///////////////////////////// 

// Map are just like objects
// Map stores unique key value pairs
// Map remebers the order in which value is set

const map = new Map();
map.set("IN","India")
map.set("FR","France")
map.set("SL","Srilanka")

// console.log(map); //Map(3) { 'IN' => 'India', 'FR' => 'France', 'SL' => 'Srilanka' }

for (const key of map) {
    // console.log(key);
}
// [ 'IN', 'India' ]
// [ 'FR', 'France' ]
// [ 'SL', 'Srilanka' ]

for (const [key, value] of map) {
    console.log(key,":-",value);
}
// IN :- India
// FR :- France
// SL :- Srilanka