function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    index++;

    let bestPlayer = "";
    let maxGoals = 0;

    while (command !== "END") {
        let name = command;
        let goals = Number(input[index]);
        index++;

        if (goals > maxGoals) {
            bestPlayer = name;
            maxGoals = goals
        }
        if (maxGoals >= 10) {
            break;
        }

        command = input[index];
        index++;
    }

    console.log(`${bestPlayer} is the best player!`);

    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }

}

bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"]);

