function journey(input) {

        let budget = Number(input[0])
        let season = input[1].toLowerCase();

        sum = 0;

        if(budget <= 100) {
            if(season === "summer") {
                sum = budget * 0.3;
                console.log("Somewhere in Bulgaria");
                console.log(`Camp - ${sum.toFixed(2)}`);
            }else {
                sum = budget * 0.7;
                console.log("Somewhere in Bulgaria");
                console.log(`Hotel - ${sum.toFixed(2)}`);
            }
        } else if(budget > 100 && budget <= 1000){
            if(season === "summer") {
                sum = budget * 0.4;
                console.log("Somewhere in Balkans");
                console.log(`Camp - ${sum.toFixed(2)}`);

            }else {
                sum = budget * 0.8;
                console.log("Somewhere in Balkans");
                console.log(`Hotel - ${sum.toFixed(2)}`);


            }
        }else {
            sum = budget * 0.9;
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${sum.toFixed(2)}`);

        }

}

journey(["1500", "summer"])