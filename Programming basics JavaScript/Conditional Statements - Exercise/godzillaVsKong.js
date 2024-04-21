function godzillaVsKong(input) {

        let budgetFilm = Number(input[0]);
        let statistCount = Number(input[1]);
        let priceClothesForStatist = Number(input[2]);

        let priceForDecor = budgetFilm * 0.1;
        let sumForClothes = statistCount * priceClothesForStatist;
        

       if(statistCount > 150) {
            sumForClothes = sumForClothes - (sumForClothes * 0.1);
            
       }

        let totalSum = priceForDecor + sumForClothes;
        let diff = Math.abs(budgetFilm - totalSum);

       if(totalSum > budgetFilm) {
            console.log("Not enough money!");
            console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
       }
       if (totalSum <= budgetFilm) {
            console.log("Action!");
            console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
        
       }
}
       
godzillaVsKong(["20000","120","55.5"]);


