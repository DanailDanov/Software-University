function petShop(input) {

        let piecesDogsFoods = Number(input[0]);
        let piecesCatsFoods = Number(input[1]);

        let neededMoneyDogs = piecesDogsFoods * 2.50;
        let neededMoneyCats = piecesCatsFoods * 4;
        let neededMoney = neededMoneyDogs + neededMoneyCats;
        console.log(`${neededMoney} lv.`)

}

petShop(["5 ","4 "]);