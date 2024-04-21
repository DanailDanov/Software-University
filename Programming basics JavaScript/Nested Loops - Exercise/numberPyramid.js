function numberPyramid (input) {

        let n = Number(input[0]);
        let printNumber = 1;
        let isFinish = false;
        for(let y = 1; y <= n; y++) {
            let buff = "";
            for(let x = 0; x < y; x++) {
                buff += printNumber + " ";
                printNumber++;
                if(printNumber > n) {
                    isFinish = true;
                    break;
                }
            }
            console.log(buff);
            if(isFinish) {
                break;
            }
        }

}

numberPyramid (["7"]);