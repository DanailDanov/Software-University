function vacationBooksList(input) {

        let pagesCount = Number(input[0]);
        let pagesForOneHour = Number(input[1]);
        let daysCountForReading = Number(input[2]);
        
        let totalTimeForReading = pagesCount / pagesForOneHour;
        let neededHours = totalTimeForReading / daysCountForReading;
        console.log(neededHours);

}

vacationBooksList(["212","20","2"]);