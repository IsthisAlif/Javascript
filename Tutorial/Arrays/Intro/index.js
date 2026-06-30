// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut")
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(numOfFruits);
console.log(index);

// Loop through element
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

// Sort an array
fruits.sort();
fruits.sort().reverse;