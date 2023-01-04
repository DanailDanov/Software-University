function partyTime(input) {

    let vipGuestList = [];
    let regularguestList = [];

    while (input[0] !== "PARTY") {

        let reservation = input.shift();

        reservation[0].charCodeAt() >= 48 && reservation[0].charCodeAt() <= 57 ?
            vipGuestList.push(reservation) : regularguestList.push(reservation);
    }

    for (const comingGuest of input) {
        if (vipGuestList.indexOf(comingGuest) >= 0) {
            vipGuestList.splice(vipGuestList.indexOf(comingGuest), 1);
        }
        if (regularguestList.indexOf(comingGuest) >= 0) {
            regularguestList.splice(regularguestList.indexOf(comingGuest), 1);
        }
    }

    console.log(vipGuestList.length + regularguestList.length);
    vipGuestList.forEach(el => console.log(el));
    regularguestList.forEach(el => console.log(el));


}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
