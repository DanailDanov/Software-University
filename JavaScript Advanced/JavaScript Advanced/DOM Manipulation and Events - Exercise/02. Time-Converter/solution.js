function attachEventsListeners() {

    Array.from(document.querySelectorAll('input[type = button]')).forEach(x => x.addEventListener('click', onConvert));

    const convertDays = document.getElementById('days');
    const convertHours = document.getElementById('hours');
    const convertMinutes = document.getElementById('minutes');
    const convertSeconds = document.getElementById('seconds');

    let infoForOneDay = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {

        let days = value / infoForOneDay[unit];

        return {
            days: days,
            hours: days * infoForOneDay.hours,
            minutes: days * infoForOneDay.minutes,
            seconds: days * infoForOneDay.seconds,
        }
    }


    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]')
        
        let time = convert(Number(input.value), input.id);

        convertDays.value = time.days;
        convertHours.value = time.hours;
        convertMinutes.value = time.minutes;
        convertSeconds.value = time.seconds;
    }
}
