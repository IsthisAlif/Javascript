// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name
//        does not work with an arrow function

const person1 = {
    name: "Spongebob",
    favfood: "hamburgers",
    sayHello: function () {console.log(`Hi! I am ${this.name}`)},
    eat: function () {console.log(`${this.name} is eating ${this.favfood}`)}
}

const person2 = {
    name: "Patrick",
    favfood: "pizza",
    sayHello: function () {console.log(`Hi! I am ${this.name}`)},
    eat: function () {console.log(`${this.name} is eating ${this.favfood}`)}
}


person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();