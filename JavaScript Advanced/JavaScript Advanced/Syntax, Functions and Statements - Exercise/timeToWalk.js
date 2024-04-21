function timeToWalk(steps, stepsInMetres, speedInKm) {

    let distanceInMetres = steps * stepsInMetres;
    let speedInMetresPerSecond = speedInKm / 3.6;
    let rest = Math.floor(distanceInMetres / 500) * 60;
    let time = distanceInMetres / speedInMetresPerSecond + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

timeToWalk(2564, 0.70, 5.5);