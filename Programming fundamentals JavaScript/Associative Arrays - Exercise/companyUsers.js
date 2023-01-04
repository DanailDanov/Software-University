function companyUsers(input) {

    let result = {};

    for (const line of input) {
        let [companyName, personID] = line.split(" -> ");

        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(personID);
    }

    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(el => {
        const companyName = el[0];
        let allId = el[1];

        console.log(companyName);

        let uniqueId = new Set(allId);

        for (const id of uniqueId) {
            console.log(`-- ${id}`);
        }
    })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);