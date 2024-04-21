function equalSumsEvenOddPosition (input) {

        let firstNum = Number(input[0]);
        let secondNum = Number(input[1]);

        let printNum = "";


        for(let i = firstNum; i <= secondNum; i++) {
                let currentNum = "" + i;
                let oddSum = 0;
                let evenSum = 0;
                for(let x = 0; x < currentNum.length; x++) {
                    let currentDigit = Number(currentNum.charAt(x))
                    if(x % 2 === 0) {
                        evenSum += currentDigit;
                    } else {
                        oddSum += currentDigit;
                    }
                }
                if(oddSum === evenSum) {
                    printNum += `${i} `;
                }
        }
            console.log(printNum);

}

equalSumsEvenOddPosition (["100000","100050"]);
