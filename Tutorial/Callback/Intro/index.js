// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next."


// Example 1
function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("Wait");
}

function leave(){
    console.log("Leave");
}

function goodbye(){
    console.log("Goodbye");
}

hello(wait);

// Example 2
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayconsole(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("myh1").textContent = result;
}

sum(displayconsole, 1, 2);