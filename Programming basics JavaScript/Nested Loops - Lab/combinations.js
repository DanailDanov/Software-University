function combinations(input) {

    let n = Number(input[0]);

    let validCombinationCounter = 0;

    for (x1 = 0; x1 <= n; x1++) {
        for (x2 = 0; x2 <= n; x2++) {
            for (x3 = 0; x3 <= n; x3++) {
                let res = x1 + x2 + x3;
                if(n === res) {
                    validCombinationCounter++;
                }
                
            }
        }
        
    }
    console.log(validCombinationCounter);
}

combinations(["25"]);
