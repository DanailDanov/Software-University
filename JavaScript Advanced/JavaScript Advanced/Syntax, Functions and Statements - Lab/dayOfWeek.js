function dayOfWeek(weekDay) {

    const day = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }

    if (day.hasOwnProperty(weekDay)) {
        console.log(day[weekDay]);
    } else {
        console.log('error');
    }
}

dayOfWeek('Wednesday');

Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday