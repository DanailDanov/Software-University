function foodDelivery(input) {

        let chickenMenuCount = Number(input[0]);
        let fishMenuCount = Number(input[1]);
        let vegeterianMenuCount = Number(input[2]);

        let priceForChickenMenu = chickenMenuCount * 10.35;
        let priceForFishMenu = fishMenuCount * 12.40;
        let priceForVegeterianMenu = vegeterianMenuCount * 8.15;
        let totalPriceForMenu = priceForChickenMenu + priceForFishMenu + priceForVegeterianMenu;
        let priceForDesert = totalPriceForMenu * 0.2;
        let PriceForAll = totalPriceForMenu + priceForDesert + 2.50;
        console.log(PriceForAll)

}

foodDelivery(["2 ","4 ","3 "]);
