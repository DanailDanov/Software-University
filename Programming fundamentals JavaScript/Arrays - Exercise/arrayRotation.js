function arrayRotation(array, rotations) {

  

    for (let i = 0; i < rotations; i++) {

        let firstElement = array[0];

        for (let innerI = 0; innerI < array.length; innerI++) {

            array[innerI] = array[innerI + 1];

        }
        
        array[array.length - 1] = firstElement

    }

    console.log(array.join(' '));

}

arrayRotation([51, 47, 32, 61, 21], 2);