function nxNMatrix(num) {


    for (let i = 0; i < num; i++) {
        let arr = [];
        for (let j = 0; j < num; j++) {
            arr.push(num);

            if (arr.length === num) {
                console.log(arr.join(' '));
            }
        }
    }


}

nxNMatrix(3);