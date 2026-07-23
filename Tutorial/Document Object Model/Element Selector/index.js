// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()       // ELEMENT OR NULL
const myheading = document.getElementById("my-heading");
myheading.style.backgroundColor = "yellow"
myheading.style.textAlign = "center";

// 2. document.getElementsClassName() // HTML COLLECTION
const fruits = document.getElementsByClassName("fruits")

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

// 3. document.getElementsByTagName() // HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

// 4. document.querySelector()        // FIRST ELEMENT OR NULL
const element = document.querySelector(".fruits");

element.style.backgroundColor = "green"

// 5. document.querySelectorAll()     // NODELIST
const foods = document.querySelectorAll("li");

foods[1].style.backgroundColor = "red";
foods.forEach(food => {
    food.style.backgroundColor = "yellow"
});