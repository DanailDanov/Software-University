function trekkingMania(input) {

    let index = 0;
    let groupsCount = Number(input[index]);
    index++;


    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimanjaroCounter = 0;
    let kTwoCounter = 0;
    let everestCounter = 0;

    let totalPeople = 0;


    for (let i = 0; i < groupsCount; i++) {
        let peopleCountInGroups = Number(input[index]);
        index++;

        totalPeople += peopleCountInGroups;

        if (peopleCountInGroups <= 5) {
            musalaCounter += peopleCountInGroups;
        } else if (peopleCountInGroups >= 6 && peopleCountInGroups <= 12) {
            monblanCounter += peopleCountInGroups;
        } else if (peopleCountInGroups >= 13 && peopleCountInGroups <= 25) {
            kilimanjaroCounter += peopleCountInGroups;
        } else if (peopleCountInGroups >= 26 && peopleCountInGroups <= 40) {
            kTwoCounter += peopleCountInGroups;
        } else {
            everestCounter += peopleCountInGroups;
        }

    }

    let p1 = musalaCounter / totalPeople * 100;
    let p2 = monblanCounter / totalPeople * 100;
    let p3 = kilimanjaroCounter / totalPeople * 100;
    let p4 = kTwoCounter / totalPeople * 100;
    let p5 = everestCounter / totalPeople * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);
