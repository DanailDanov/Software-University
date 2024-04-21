function specialNumbers(input) {

    let n = Number(input[0]);
    let res = "";
   
    for (let i = 1; i <= 9; i++) {
        for (let x = 1; x <= 9; x++) {
            for (let y = 1; y <= 9; y++) {
                for (let j = 1; j <= 9; j++) {
                    if (n % i === 0 && n % x === 0 && n % y === 0 && n % j === 0) {
                        res += `${i}${x}${y}${j} `;

                    }
                }
            }
        }
    }
    console.log(res);
}

specialNumbers(["3"]);