function addressBook(input) {

    let infoAboutAdress = {};

    for (const line of input) {

        let [name, adress] = line.split(":");

        infoAboutAdress[name] = adress;
        
    }

    let array = Object.entries(infoAboutAdress);
    array.sort((a, b) => a[0].localeCompare(b[0]));

    for (const key of array) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
