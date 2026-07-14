// Digital Clock Program

function updateClock(){

    const now = new Date();
    const hour = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timestring = `${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timestring;

}

updateClock();
setInterval(updateClock, 1000);