const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent = `You are subscribed!`
    }
    else{
        subresult.textContent = `You are NOT subscribed!`
    }

    if(visabtn.checked){
        paymentresult.textContent = `You are paying with VISA`
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent = `You are paying with MASTERCARD`
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = `You are paying with PAYPAL`
    }
    else{
        paymentresult.textContent = `Please choose a payment option`
    }

}