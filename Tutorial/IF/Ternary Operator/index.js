// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// Example 1
let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

// Example 2
let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good afternoon";
console.log(greeting);

// Example 3
let isStudent = false;
let areyou = isStudent ? "You are a student" : "You are not a student";
console.log(areyou);

// Example 4
let purchaseamount = 125;
let discount = purchaseamount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseamount - purchaseamount * (discount/100)}`);