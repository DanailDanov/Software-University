function newHouse(input) {

        let flowers = input[0];
        let flowersCount = Number(input[1]);
        let budget = Number(input[2]);

        sum = 0;
        //Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus
        switch(flowers) {
            case "Roses":
                sum = flowersCount * 5;
                if(flowersCount > 80) {
                    sum = sum * 0.90;
                }
            break;
            case "Dahlias":
                sum = flowersCount * 3.80;
                if(flowersCount > 90) {
                    sum = sum * 0.85;
                }
            break;
            case "Tulips":
                sum = flowersCount * 2.80;
                if(flowersCount > 80) {
                    sum = sum * 0.85;
                }
            break;
            case "Narcissus":
                sum = flowersCount * 3.00;
                if(flowersCount < 120) {
                    sum = sum * 1.15;
                }
            break;
            case "Gladiolus":
               sum = flowersCount * 2.50;
               if(flowersCount < 80) {
                    sum = sum * 1.20;
               }
            break;
        }
        
        diff = Math.abs(budget - sum);
        if (budget >= sum) {
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${diff.toFixed(2)} leva left.`);
        }else if(budget < sum) {
            console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
        }



}

newHouse(["Roses","55","250"]);

