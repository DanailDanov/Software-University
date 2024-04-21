function roadRadar(currentSpeed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residential = 20;

    if (area === 'city') {
        if (currentSpeed <= cityLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${cityLimit} zone`);
        } else if (currentSpeed > cityLimit) {
            if (currentSpeed - cityLimit <= 20) {
                let difference = currentSpeed - cityLimit;
                let stat = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${stat}`);
            } else if (currentSpeed - cityLimit <= 40) {
                difference = currentSpeed - cityLimit;
                stat = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${stat}`);
            } else {
                difference = currentSpeed - cityLimit;
                stat = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${stat}`);
            }

        }
    } else if (area === 'motorway') {
        if (currentSpeed <= motorwayLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${motorwayLimit} zone`);
        } else if (currentSpeed > motorwayLimit) {
            if (currentSpeed - motorwayLimit <= 20) {
                let difference = currentSpeed - motorwayLimit;
                let stat = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${stat}`);
            } else if (currentSpeed - motorwayLimit <= 40) {
                difference = currentSpeed - motorwayLimit;
                stat = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${stat}`);
            } else {
                difference = currentSpeed - motorwayLimit;
                stat = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${stat}`);
            }

        }
    } else if (area === 'interstate') {
        if (currentSpeed <= interstateLimit) {
            console.log(`Driving ${currentSpeed} km/h in a ${interstateLimit} zone`);
        } else if (currentSpeed > interstateLimit) {
            if (currentSpeed - interstateLimit <= 20) {
                let difference = currentSpeed - interstateLimit;
                let stat = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${stat}`);
            } else if (currentSpeed - interstateLimit <= 40) {
                difference = currentSpeed - interstateLimit;
                stat = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${stat}`);
            } else {
                difference = currentSpeed - interstateLimit;
                stat = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateLimit} - ${stat}`);
            }

        }
    } else if (area === 'residential') {
        if (currentSpeed <= residential) {
            console.log(`Driving ${currentSpeed} km/h in a ${residential} zone`);
        } else if (currentSpeed > residential) {
            if (currentSpeed - residential <= 20) {
                let difference = currentSpeed - residential;
                let stat = 'speeding'
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${stat}`);
            } else if (currentSpeed - residential <= 40) {
                difference = currentSpeed - residential;
                stat = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${stat}`);
            } else {
                difference = currentSpeed - residential;
                stat = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${stat}`);
            }

        }
    }
}
roadRadar(40, 'city');