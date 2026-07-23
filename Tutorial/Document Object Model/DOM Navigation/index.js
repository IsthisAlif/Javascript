// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
const ulElement = document.querySelectorAll("ul");
ulElement.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

// .lastElementChild
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;

lastChild.style.backgroundColor = "green";

// .nextElementSibling
const apple = document.getElementById("apple");
const nextSibling = apple.nextElementSibling;

nextSibling.style.backgroundColor = "red";

// .previousElementSibling
const icecream = document.getElementById("ice-cream");
const prevSibling = icecream.previousElementSibling;

prevSibling.style.backgroundColor = "blue"

// .parentElement
const child = document.getElementById("onions");
const parent = child.parentElement;

parent.style.backgroundColor = "orange";

// .children
const drinks = document.getElementById("drinks");
const children = drinks.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "purple";
})