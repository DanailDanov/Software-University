function smallShop(input) {

        let index = 0;
        let product = input[index];
        index++;
        let town = input[index];
        index++;
        let quantity = Number(input[index]);
        index++;

        productPrice = 0;


       if (town === "Sofia") {
            switch (product) {
                case "coffee": productPrice = quantity * 0.50; break;
                case "water":productPrice = quantity * 0.80; break;
                case "beer":productPrice = quantity * 1.20; break;
                case "sweets":productPrice = quantity * 1.45; break;
                case "peanuts": productPrice = quantity * 1.60; break;               
            }

       }else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": productPrice = quantity * 0.40; break;
            case "water":productPrice = quantity * 0.70; break;
            case "beer":productPrice = quantity * 1.15; break;
            case "sweets":productPrice = quantity * 1.30; break;
            case "peanuts": productPrice = quantity * 1.50; break;               
        }

       }else if (town === "Varna") {
        switch (product) {
            case "coffee": productPrice = quantity * 0.45; break;
            case "water":productPrice = quantity * 0.70; break;
            case "beer":productPrice = quantity * 1.10; break;
            case "sweets":productPrice = quantity * 1.35; break;
            case "peanuts": productPrice = quantity * 1.55; break;               
        }
       } 
       console.log(productPrice);
}

smallShop(["coffee","Varna","2"]);