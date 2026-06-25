// SWITCH = can be an efficient replacement to many else if statements

// Example 1
let day = 1;
switch(day){
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is thursday");
        break;
    case 5:
        console.log("It is friday");
        break;
    case 6:
        console.log("It is saturday");
        break;
    case 7:
        console.log("It is sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}

// Example 2
let testscore = 52;
let lettergrade;

switch(true){
    case testscore >= 90:
        lettergrade = "A";
        break
    case testscore >= 80:
        lettergrade = "B";
        break
    case testscore >= 70:
        lettergrade = "C";
        break
    case testscore >= 60:
        lettergrade = "D";
        break
    default:
        lettergrade = "F";
}
console.log(`Your grade is "${lettergrade}"`);