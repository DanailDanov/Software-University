function convertToObject(convertJson) {

    let obj = JSON.parse(convertJson);

    for (const key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]} `);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
