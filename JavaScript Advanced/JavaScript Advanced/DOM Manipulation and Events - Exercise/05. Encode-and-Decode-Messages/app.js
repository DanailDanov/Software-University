function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const button = document.querySelectorAll('button');

    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    function encode() {
        let encodedMessage = '';
        let input = textAreas[0].value;

        for (let i = 0; i < input.length; i++) {
            encodedMessage += String.fromCharCode(input[i].charCodeAt() + 1);
        }

        textAreas[1].value = encodedMessage;
        textAreas[0].value = '';

    }

    function decode () {
        let decodeMessage = '';
        let input = textAreas[1].value;

        for (let i = 0; i < input.length; i++) {
            decodeMessage += String.fromCharCode(input[i].charCodeAt() - 1);
        }

        textAreas[1].value = decodeMessage;
    }
}