function summerOutfit(input) {

        let degrees = Number(input[0]);
        let typeOfDay = input[1];

        let outfit;
        let shoes;

        if( degrees <= 18) {
            if (typeOfDay === "Morning") {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }else if (typeOfDay === "Afternoon" || typeOfDay === "Evening") {
                outfit = "T-Shirt";
                shoes = "Moccasins";
            }
        } else if(degrees > 18 && degrees <= 24) {
            if(typeOfDay === "Morning" || typeOfDay === "Evening") {
                outfit = "Shirt";
                shoes = "Moccasins";
            }else if(typeOfDay === "Afternoon") {
                outfit = "T-Shirt";
                shoes = "Sandals"
            }
        } else {
            if(typeOfDay === "Morning") {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }else if(typeOfDay === "Afternoon") {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }else if(typeOfDay === "Evening") {
                outfit = "Shirt";
                shoes = "Moccasins";
            }    
        }
       
          console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`); 
}
summerOutfit(["22","Afternoon"]);

