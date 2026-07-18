// Error = An Object that is created to represent a problem that occurs
//         Occurs often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resourses

// Example 1
try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){1
    console.error(error);
}
finally{2
    // Close Files
    // Close Connection
    // Release Resources
    console.log("This always execute");
}

console.log("You have reached the end!");

// Example 2
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");
