function depositCalculator(input) {

        let depositSum = Number(input[0]);
        let termOfDeposit = Number(input[1]);
        let annualInterestRate = Number(input[2]);

        let accruedInterest = depositSum * (annualInterestRate / 100);
        let interestRateForMonth = accruedInterest / 12;
        let totalSum = depositSum + termOfDeposit * interestRateForMonth;
        console.log(totalSum);
       

}

depositCalculator(["200","3","5.7"]);
