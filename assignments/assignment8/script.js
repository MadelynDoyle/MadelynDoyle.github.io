//Running Man
const runningMan = document.getElementById('running-man');
let isRunning = false;
let marginLeft = 0;

runningMan.addEventListener('click', (event) => {
    event.preventDefault(); //adding so the pic will stay lol

    if (!isRunning) {
        isRunning = true;
        runningMan.src = 'images/walking.jpg'; 
        moveRunningMan();
    } else {
        isRunning = false;
        runningMan.src = 'images/walking.jpg'; 
        runningMan.style.transition = 'none';
    }
});

function moveRunningMan() {
    if (isRunning) {
        marginLeft += 10;
        runningMan.style.marginLeft = marginLeft + 'px';
        requestAnimationFrame(moveRunningMan);
    }
}


// Thermometer
const thermometerFill = document.getElementById('thermometer-fill');
const thermometerInput = document.getElementById('thermometer-input');
const thermometerButton = document.getElementById('thermometer-button');

thermometerButton.addEventListener('click', () => {
    const value = parseFloat(thermometerInput.value);
    if (!isNaN(value) && value >= 0 && value <= 10000) { 
        const fillHeight = (value / 10000) * 300;
        thermometerFill.style.height = fillHeight + 'px';
    } else {
        alert('Please enter a valid value between 0 and 10,000.');
    }
});

