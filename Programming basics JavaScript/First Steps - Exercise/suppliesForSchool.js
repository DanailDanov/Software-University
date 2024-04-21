function suppliesForSchool(input) {

        let pencilCount = Number(input[0]);
        let markersCount = Number(input[1]);
        let litresdetergent = Number(input[2]);
        let discount = Number(input[3]);

        let sumForPencil = pencilCount * 5.80;
        let sumForMarkers = markersCount * 7.20;
        let sumForDetergent = litresdetergent * 1.20;
        let totalSum = sumForPencil + sumForMarkers + sumForDetergent;
        let sumWithDiscount = totalSum - (totalSum * (discount / 100));
        console.log(sumWithDiscount);
        
}

suppliesForSchool(["2 ","3 ","4 ","25 "]);
