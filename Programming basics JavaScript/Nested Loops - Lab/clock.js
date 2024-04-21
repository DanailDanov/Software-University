function clock() {

    for (h = 0; h <= 23; h++) {
        for (m = 0; m <= 59; m++) {
            if (m < 10) {
                console.log(`${h}:0${m}`);
            }

        }

    }

}

clock();