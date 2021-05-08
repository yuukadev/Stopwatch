// Variables
let addMiliseconds = document.getElementById('miliseconds');
let addSeconds = document.getElementById('seconds');
let addMinutes = document.getElementById('minutes');
let stopWatch = document.getElementById('stopwatch');
let int;

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

// Buttons
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// Functions 
function startTime() {
    miliseconds++;

    if(miliseconds > 9) {
        addMiliseconds.innerHTML = miliseconds;
    }

    if(miliseconds >= 99) {
        seconds++;
        addSeconds.innerHTML = '0' + seconds;
        miliseconds = 0;
        miliseconds.innerHTML = '0' + 0;
    }

    if(seconds > 9) {
        addSeconds.innerHTML = seconds;
    }

    if(seconds == 60) {
        minutes++;
        addMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        addSeconds.innerHTML = '0' + 0;
        miliseconds = 0; 
    }
}

// Event Listener
startBtn.addEventListener('click', () => {
    int = setInterval(startTime, 10);
});

stopBtn.addEventListener('click', () => {
    clearInterval(int);
});

resetBtn.addEventListener('click', () => {
    clearInterval(int);

    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    addMiliseconds.innerHTML = '00';
    addSeconds.innerHTML = '00';
    addMinutes.innerHTML = '00';
});
