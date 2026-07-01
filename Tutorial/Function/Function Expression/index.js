// Function expression = a way to define functions as 
//                       values or variables

// Example 1
const hello = function(){
    console.log("Hello");
}

hello();

// Example 2
setTimeout(function(){
    console.log("Wait");
}, 3000);

// Example 3
const num = [1, 2, 3, 4, 5, 6];
const squared = num.map(function(element){
    return Math.pow(element, 2);
});
const cubed = num.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = num.filter(function(element){
    return element % 2 === 0;
});
const oddNums = num.filter(function(element){
    return element % 2 !== 0;
});
const total = num.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squared);
console.log(cubed);
console.log(evenNums);
console.log(oddNums);
console.log(total);