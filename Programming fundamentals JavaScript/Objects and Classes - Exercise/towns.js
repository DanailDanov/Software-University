function towns(array) {

    let townInfo = {};

    for (let i = 0; i < array.length; i++) {
        let [town, latitude, longitude] = array[i].split(" | ");

        townInfo.town = town;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);