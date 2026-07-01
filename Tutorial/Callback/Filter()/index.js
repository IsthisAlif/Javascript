// .filter() = creates a new array by filtering
//             out elements

// Example 1
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

console.log(evenNums);
console.log(oddNums);

// Example 2
const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

console.log(adults);
console.log(children);

// Example 3
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

console.log(shortWords);
console.log(longWords);