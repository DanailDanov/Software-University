function repainting(input) {

        let requiredAmountOfNylon = Number(input[0]);
        let requiredAmountOfPaint = Number(input[1]);
        let amountOfThinner = Number(input[2]);
        let hoursWorking = Number(input[3]);

        let sumOfNylon = (requiredAmountOfNylon + 2) * 1.50;
        let sumOfPaint = (requiredAmountOfPaint * 1.1) * 14.50;
        let sumOfThinner = amountOfThinner * 5;
        bag = 0.40;
        let totalSumForMaterials = sumOfNylon + sumOfPaint + sumOfThinner + bag;
        let sumForWorkers = (totalSumForMaterials * 0.3) * hoursWorking;
        let totalPrice = totalSumForMaterials + sumForWorkers;
        
        console.log(totalPrice);
}

repainting(["5 ","10 ","10 ","1 "]);

