// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convinient way
//                 [] = to perform arry destructuring
//                 {} = to perform object destructuring
//                 5 examples

// Example 1
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Example 2
// SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// Example 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const colours = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colours;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// Example 4
// EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 34,
}

const {firstname, lastname, age, job="Unemployed"} = person2;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

// Example 5
// DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstname, lastname, age, job="Unemployed"}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person4 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 34,
}

displayPerson(person1);