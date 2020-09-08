let rotation = [0.0, 0.0, 0.0]
let secHand = document.getElementById("secondhand");
let minHand = document.getElementById("minutehand");
let hourHand = document.getElementById("hourhand");
let canvas = document.getElementById('canvas');

function secsRotation(time) {
    return Math.floor((time.getSeconds() + 0.001 * time.getMilliseconds()) * 60) * 0.1;
}

function hoursRotation(time) {
    return Math.floor((time.getHours() % 12 + time.getMinutes() * 1.0 / 60) * 300) * 0.1;
}

function minutesRotation(time) {
    return Math.floor((time.getMinutes() + time.getSeconds() * 1.0 / 60) * 60) * 0.1;
}

canvas.setAttribute('transform', 'scale(0.25 0.25) translate(-1500 -1500)');

setInterval(() => {
    let time = new Date();
    if (Math.abs(hoursRotation(time) - rotation[0]) >= 0.05) {
        rotation[0] = hoursRotation(time);
        let transformString = `rotate(${rotation[0]},500,500)`;
        hourHand.setAttribute('transform', transformString);
    }
    if (Math.abs(minutesRotation(time) - rotation[1]) >= 0.05) {
        rotation[1] = minutesRotation(time);
        let transformString = `rotate(${rotation[1]},500,500)`;
        minHand.setAttribute('transform', transformString);
    }
    if (Math.abs(secsRotation(time) - rotation[2]) >= 0.05) {
        rotation[2] = secsRotation(time);
        let transformString = `rotate(${rotation[2]},500,500)`;
        secHand.setAttribute('transform', transformString);
    }
}, 1000 / 6);

// this is accurate - the 6105 had a 21600 bph movement (6 beats/second)