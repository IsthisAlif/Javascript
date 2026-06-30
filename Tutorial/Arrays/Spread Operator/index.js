// spread operator ... allows an iterable such as an
//                 array or string to be expanded
//                 into seperate elements
//                 (unpacks the elements)

// Arrays

// Example 1
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);

// Example 2
let fruits = ["apple", "orange", "banana"];
let vegetable = ["carrots", "celery", "potatoes"]
let foods = [...fruits, ...vegetable, "eggs", "milk"];

console.log(foods);

// String
let username = "Abdul Alif";
let letters = [...username].join("-");

console.log(letters);