// variable = a container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration let x;
// 2. assignment  x = 100;

let x;
x = 100;

// number
let age = 22;
let price = 10.99;
let gpa = 2.1;


// string
let FirstName = "Alif";
let favfood = "Pizza";
let email = "abdulalif2003@gmail.com";

// boolean
let online = true;
let forsale = false;
let isStudent = false;

console.log(typeof online);

// number
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);

// string
console.log(`Your name is ${FirstName}`);
console.log(`You like ${favfood}`);
console.log(`Your email is ${email}`);

// boolean
console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forsale}`);
console.log(`Enrolled: ${isStudent}`);

// Exercise
let fullname = "Abdul Alif";
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `You are a student: ${student}`;