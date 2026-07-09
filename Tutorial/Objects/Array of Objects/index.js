
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

// view element
console.log(fruits[0].name);
console.log(fruits[2].calories);

// add element
fruits.push({name: "grapes", color: "purple", calories: 62})
console.log(fruits);

// remove the last element 
fruits.pop()

// remove element at certain index
fruits.slice(1, 2);

// forEach()
fruits.forEach(fruit => console.log(fruit.name));

// map()
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// filter()
const yellowfruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowfruits);

// reduce()
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(maxFruit);
console.log(minFruit.calories);