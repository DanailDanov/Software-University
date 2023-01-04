function theatrePromotions(day, age) {

    priceForTicket = 0;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                priceForTicket = 12;
            } else if (age > 18 && age <= 64) {
                priceForTicket = 18;
            } else if (age > 64 && age <= 122) {
                priceForTicket = 12;
            }
            break;
        
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                priceForTicket = 15;
            } else if (age > 18 && age <= 64) {
                priceForTicket = 20;
            } else if (age > 64 && age <= 122) {
                priceForTicket = 15;
            }
            break;
        
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                priceForTicket = 5;
            } else if (age > 18 && age <= 64) {
                priceForTicket = 12;
            } else if (age > 64 && age <= 122) {
                priceForTicket = 10;
            }
            break;
        }

        if(priceForTicket !== 0) {
            console.log(priceForTicket + '$');
        } else {
            console.log('Error!');
        }
}

theatrePromotions('Weekday', 0);