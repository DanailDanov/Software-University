function townsToJSON(inputInformation) {

    const result = [];

    let tableHeadings = inputInformation.shift();


    for (const elements of inputInformation) {

        let [town, latitude, longitude] = elements
            .split("|")
            .filter((el) => el.length !== 0)
            .map((el) => el.trim());

            
        result.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        })

    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);