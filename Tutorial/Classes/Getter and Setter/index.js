// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// Example 1
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// Example 2
class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstname = newFirstname;
        }
        else{
            console.error("First name must be a non empty string");
        }
    }

    set lastname(newLastname){
        if(typeof newLastname === "string" && newLastname.length > 0){
            this._lastname = newLastname;
        }
        else{
            console.error("Last name must be a non empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a positive number");
        }
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get fullname(){
        return this._firstname + " " + this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("abdul", "alif", 22);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);