// variable scope = where a variable is recognized
//                  and accessible (local vs global)

let x = 3; // Global

function function1(){
    console.log(x);
}

function function2(){
    let x = 2; // Local
    console.log(x);
}

function1();
function2();