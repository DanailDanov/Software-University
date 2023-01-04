function piccolo(input) {

    let parkingLot = {};

    for (let line of input) {

        let [direction, carNumber] = line.split(", ");

        if (direction === "IN") {
            parkingLot[carNumber] = null;
        } else if (direction === "OUT") {
            delete parkingLot[carNumber];
        }

    }

    let sorted = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));

    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sorted.join("\n"));

    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);