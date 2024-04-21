function filterEmployees(data, infoCriteria) {

    let input = JSON.parse(data);
    let result = [];

    let criteria = infoCriteria.split('-');

    let [firstCriteria, secondCriteria] = criteria;

    for (const element of input) {
        if (element[firstCriteria] === secondCriteria) {
            result.push(`${element['first_name']} ${element['last_name']} - ${element['email']}`);
        } else if (infoCriteria === 'all') {
            result.push(`${element['first_name']} ${element['last_name']} - ${element['email']}`);
        }
    }

    for (let index = 0; index < result.length; index++) {
        console.log(`${index}. ${result[index]}`);
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);
