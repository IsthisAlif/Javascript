// EXAMPLE 1 <h1>

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);

// REMOVE HTML ELEMENT
newH1.remove();

// EXAMPLE 2 <li>

// STEP 1 CREATE THE ELEMENT
const newLi = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newLi.textContent = "coconut";
newLi.id = "coconut";
newLi.style.fontWeight = "bold";
newLi.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
document.getElementById("fruits").append(newLi);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newLi, orange);

// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newLi);