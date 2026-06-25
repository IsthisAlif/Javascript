// IF STATEMENT = if a condition is true, execute some code
//                if not, do something else19

const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let age;

mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age>=100){
        resultelement.textContent = `You are too old`
    }
    else if(age>=18){
        resultelement.textContent = `You may enter`
    }
    else if(age<0){
        resultelement.textContent = `Your age cannot be below 0`
    }
    else{
        resultelement.textContent = `You must be 18+ to enter this site`
    }
}

