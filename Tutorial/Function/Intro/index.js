// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.


// Example 1
function happyBirthday(username, age){
    console.log("HAPPY BIRTHDAY TO YOU!");
    console.log("HAPPY BIRTHDAY TO YOU!");
    console.log(`HAPPY BIRTHDAY DEAR ${username}`);
    console.log("HAPPY BIRTHDAY TO YOU!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Alif", 22);

// Example 2
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    let result = x * y;
    return result;
}
function divide(x, y){
    return x / y;
}
function isEven(number){

    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function isValidEmail(email){

    if(email.includes("@gmail.com")){
        return true;
    }
    else{
        return false;
    }
}

console.log(add(2, 3));
console.log(subtract(2, 3));

let answer = multiply(3, 4);
console.log(answer);

console.log(divide(2, 3));

console.log(isEven(12));

console.log(isValidEmail("abdulalif2003@gmail.com"));
