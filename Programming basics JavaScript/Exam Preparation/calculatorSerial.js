function calculatorSerial(input) {

    let nameOfSerial = input[0];
    let seasonCount = Number(input[1]);
    let episodCount = Number(input[2]);
    let oneEpisodTime = Number(input[3]);

    let episodWithReklams = oneEpisodTime * 0.2;
    episodWithReklams += oneEpisodTime;
    let extraTimeSpecialEpisod = seasonCount * 10;
    let totalTime = episodWithReklams * episodCount * seasonCount + extraTimeSpecialEpisod;

    console.log(`Total time needed to watch the ${nameOfSerial} series is ${Math.floor(totalTime)} minutes.`);

}

calculatorSerial(["Game of Thrones",
    "7",
    "10",
    "50"]);


