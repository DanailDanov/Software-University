function lunchBreak(input) {

        let serialName = input[0];
        let episodTime = Number(input[1]);
        let lunchTime = Number(input[2]);

        let timeForLunch = lunchTime / 8;
        let timeForBreak = lunchTime / 4;
        let restTime = lunchTime - timeForLunch - timeForBreak;
        let diff = Math.abs(restTime - episodTime);
        if (restTime >= episodTime) {
            console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(diff)} minutes free time.`)
        } else {
            console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(diff)} more minutes.`)
        }
    }               

lunchBreak(["Teen Wolf","48","60"]);
