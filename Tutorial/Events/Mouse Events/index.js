// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const mybutton = document.getElementById("mybutton");

//function changeColor(event){
//    event.target.style.backgroundColor = "tomato";
//    event.target.textContent = "OUCH! 🥲"
//}

mybutton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🥲"
});

mybutton.addEventListener("mouseover" , event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont do it 😑"
})

mybutton.addEventListener("mouseout" , event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😀"
})