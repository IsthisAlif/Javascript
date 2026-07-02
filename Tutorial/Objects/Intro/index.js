// object = A collection of related properties and/or methods
//          Can represent real world objects, (people, products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi, I am John")},
    eat: function(){console.log("I am eating a sandwich")},
}

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    isEmployed: false,
    sayHello: function(){console.log("Hey, I am Jane")},
    eat: () => console.log("I am eating salad"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();