
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const current = new Date();

    const seconds = current.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  
    const mins = current.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds /60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = current.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((mins /60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();