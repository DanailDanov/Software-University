function fruitShop(input) {

        let fruit = input[0];
        let day = input[1];
        let quantity = Number(input[2]);
        let price = 0;
        
        if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
            switch(fruit) {
            case "banana":price = 2.50 * quantity;break;
            case "apple":price = 1.20 * quantity;break;
            case "orange":price = 0.85 * quantity;break;
            case "grapefruit":price = 1.45 * quantity;break;
            case "kiwi":price = 2.70 * quantity;break;
            case "pineapple":price = 5.50 * quantity;break;
            case "grapes":price = 3.85  *quantity;break;
            default: 
                console.log("error");break;

            }
        else if (day === "Saturday" || day === "Sunday") {
            switch(fruit) {
            case "banana":price = 2.70 * quantity;break;
            case "apple":price = 1.25 * quantity;break;
            case "orange":price = 0.90 * quantity;break;
            case "grapefruit":price = 1.60 * quantity;break;
            case "kiwi":price = 3.00 * quantity;break;
            case "pineapple":price = 5.60 * quantity;break;
            case "grapes":price = 4.20 * quantity;break;
            default:
                console.log("error"); break;
            }

        }else {
            console.log("error");

        }
        if (price !== 0) {
            console.log(price.toFixed(2));
        }
}

fruitShop(["tomato",
"Monday",
"0.5"])
