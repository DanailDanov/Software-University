function meetings(input) {

    let successfulMeetings = {};

    for (const line of input) {

        let [day, name] = line.split(" ");

        if (!successfulMeetings.hasOwnProperty(day)) {

            successfulMeetings[day] = name;

            console.log(`Scheduled for ${day}`);

        } else {

            console.log(`Conflict on ${day}!`);

        }
    }

    for (const key in successfulMeetings) {

        console.log(`${key} -> ${successfulMeetings[key]}`);

    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
