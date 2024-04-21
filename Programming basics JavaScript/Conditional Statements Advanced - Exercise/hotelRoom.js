function hotelRoom(input) {

        let month = input[0];
        let daysForSleep = Number(input[1]);

        studioPrice = 0;
        apartmentPrice = 0;
        
        if(month === "May" || month === "October") {
            if(daysForSleep > 7 && daysForSleep <= 14) {
                  studioPrice  = (daysForSleep * 50) * 0.95;
                  apartmentPrice = daysForSleep * 65;

            }else if (daysForSleep > 14 ) {
                studioPrice = (daysForSleep * 50) * 0.70;
                apartmentPrice = (daysForSleep * 65) * 0.90;
            }else {
                studioPrice = daysForSleep * 50
                apartmentPrice = daysForSleep * 65
            }
        } else if(month === "June" || month === "September") {
            if(daysForSleep > 14){
                studioPrice = (daysForSleep * 75.2) * 0.80;
                apartmentPrice = (daysForSleep * 68.7) * 0.90;
            }else {
                studioPrice = daysForSleep * 75.2;
                apartmentPrice = daysForSleep * 68.7;
            }
        } else if (month === "July" || month === "August") {
            if(daysForSleep > 14) {
                studioPrice = daysForSleep * 76;
                apartmentPrice = (daysForSleep * 77) * 0.90;
            }else {
                studioPrice = daysForSleep * 76;
                apartmentPrice = daysForSleep * 77;
            }
        }  
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`); 
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`) 

}
hotelRoom(["June",
"14"])




