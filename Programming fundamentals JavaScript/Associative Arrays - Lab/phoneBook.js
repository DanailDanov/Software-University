function phoneBook(input) {

    let phoneNumbers = {};

    for (const line of input) {

        let [name, phoneNumber] = line.split(" ");

        phoneNumbers[name] = phoneNumber;

    }

    for (const key in phoneNumbers) {

        console.log(`${key} -> ${phoneNumbers[key]}`);
        
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
