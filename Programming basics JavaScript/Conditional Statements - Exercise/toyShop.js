function toyShop(input) {

        let priceForTrip = Number(input[0]);
        let puzzleCount = Number(input[1]);
        let talkingDollsCount = Number(input[2]);
        let bearsCount = Number(input[3]);
        let minionsCount = Number(input[4]);
        let trucksCount = Number(input[5]);
    

        let totalToyCount = puzzleCount + talkingDollsCount + bearsCount + minionsCount + trucksCount;
        let totalPriceForToy = puzzleCount * 2.60 + talkingDollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;

        if (totalToyCount >= 50) {
            totalPriceForToy = totalPriceForToy * 0.75; 
        }
            totalPriceForToy = totalPriceForToy * 0.90;
            let diff = Math.abs(priceForTrip - totalPriceForToy);
        if (totalPriceForToy >= priceForTrip) {
            console.log(`Yes! ${diff.toFixed(2)} lv left.`)
        } else {
            console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
        }    
     
}

toyShop(["320","8","2","5","5","1"]);

