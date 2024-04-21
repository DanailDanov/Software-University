function cinema(input) {

        type = input[0];
        let r = Number(input[1]);
        let c = Number(input[2]);
        let sum = 0;

        if(type === "Premiere") {
                sum = r * c * 12;
        }else if (type === "Normal") {
            sum = r * c * 7.50;
        }else if (type === "Discount") {
            sum = r * c * 5.00;
        }

        console.log(`${sum.toFixed(2)} leva`);
}

cinema(["Discount","12","30"]);

