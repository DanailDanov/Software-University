function onTimeForTheExam(input) {

    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExam = hoursExam * 60 + minExam;
    let timeArrive = hoursArrive * 60 + minArrive;

    if (timeExam < timeArrive) {
        console.log("Late");
        let diff = Math.abs(timeArrive - timeExam);
        if (diff < 60) {
            let min = diff % 60;
            console.log(`${min} minutes after the start`)
        } else {
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`)
            }
        }
    } else if (timeArrive <= timeExam && timeExam - timeArrive <= 30) {
        console.log("On time");
        let diff = Math.abs(timeArrive - timeExam);
        if (diff > 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    } else {
        console.log("Early");
        let diff = Math.abs(timeArrive - timeExam);
        if (diff < 60) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        } else {
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }

        }
    }
}

onTimeForTheExam