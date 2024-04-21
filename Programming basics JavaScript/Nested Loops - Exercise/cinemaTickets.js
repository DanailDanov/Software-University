function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;

    let standardTicketCount = 0;
    let studentTicketCount = 0;
    let kidTicketCount = 0;

    let totalTicketCount = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;
        let typeOfTicket = input[index];
        index++
        let sumOfTicket = 0;
        while (typeOfTicket !== "End") {

            switch (typeOfTicket) {
                case "standard":
                    standardTicketCount++;
                    sumOfTicket++;
                    totalTicketCount++;
                    break;
                case "student":
                    studentTicketCount++;
                    sumOfTicket++;
                    totalTicketCount++;
                    break;
                case "kid":
                    kidTicketCount++;
                    sumOfTicket++;
                    totalTicketCount++;
                    break;
            }

            if (sumOfTicket === freeSpace) {
                break;
            }

            typeOfTicket = input[index];
            index++;

        }

        let percent = sumOfTicket / freeSpace * 100;
        console.log(`${movieName} - ${percent.toFixed(2)}% full.`)

        command = input[index];
        index++;
    }

    let studentTicketPercent = studentTicketCount / totalTicketCount * 100;
    let standardTicketPercent = standardTicketCount / totalTicketCount * 100;
    let kidTicketPercent = kidTicketCount / totalTicketCount * 100;

    console.log(`Total tickets: ${totalTicketCount}`);
    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);

