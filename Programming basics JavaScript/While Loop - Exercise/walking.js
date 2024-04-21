function walking(input) {

    let index = 0;
    let command = input[index];
    index++;

    let target = 10000;
    let sumOfSteps = 0;


    while (command !== "Going home") {

        let currentSteps = Number(command);

        sumOfSteps += currentSteps;

        if (sumOfSteps >= target) {
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {
        currentSteps = Number(input[index]);
        index++;
        sumOfSteps += currentSteps;
    }

    let diff = Math.abs(target - sumOfSteps);

    if (sumOfSteps >= target) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`)
    }

}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
