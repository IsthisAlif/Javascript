// DOM = DOCUMENT OBJECT MODEL
//       Object() that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

document.title = "My Website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
const username = "";
const welcomeMsg = document.getElementById("welcomemsg");

welcomeMsg.textContent += username === "" ? `Guest` : username;

console.dir(document);