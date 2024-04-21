function sequence2k1(input) {


    let n = Number(input[0]);


    let numCounter = 1;

    while (numCounter <= n) {

        console.log(numCounter);
        numCounter = 2 * numCounter + 1;


    }

}

sequence2k1(["8"]);