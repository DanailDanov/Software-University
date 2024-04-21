function yardGreening(input) {

        let meetresForGreening = Number(input[0]);
        let sumForGreening = meetresForGreening * 7.61;
        let discount = sumForGreening * 0.18;
        let finalPrice = sumForGreening - discount;

        console.log(`The final price is: ${finalPrice} lv.`);
        console.log(`The discount is: ${discount} lv.`);



}

yardGreening(["550"]);