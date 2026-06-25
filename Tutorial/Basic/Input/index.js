// How to accept user input

// 1. EASY WAY = window prompt
// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// 2. PROFESSIONAL WAY = HTML textbox
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Welcome ${username}`
}
