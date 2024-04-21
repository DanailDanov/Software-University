function shopping(input) {

        let budgetOfPetar = Number(input[0]);
        let videocartsCount = Number(input[1]);
        let processorCount = Number(input[2]);
        let RamCount = Number(input[3]);

        let priceForVideocarts = videocartsCount * 250;
        let priceForProcessor = processorCount * (priceForVideocarts * 0.35);
        let priceForRamMemory = RamCount * (priceForVideocarts * 0.10);
        let totalSum = priceForVideocarts + priceForProcessor + priceForRamMemory;
        

        if(videocartsCount > processorCount) {
                totalSum = totalSum * 0.85;
               
        }
         
        let diff = Math.abs(budgetOfPetar - totalSum);
        if (budgetOfPetar >= totalSum) {
            console.log(`You have ${diff.toFixed(2)} leva left!`);
        }else  {
            console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
        }
    }

shopping(["920.45","3","1","1"]);
