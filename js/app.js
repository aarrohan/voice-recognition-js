const btn = document.querySelector('.talk-btn');
const content = document.querySelector('.content');

// Arrays
const greetings = [
    'Im good you little piece of shit',
    'Doing good homie',
    'Leave me alone mother fucker'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {

    console.log('Voice is activated, you can talk now!');

};

recognition.onresult = function(event) {

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    
    readOutLoud(transcript);

};

btn.addEventListener('click', () => {
    
    recognition.start();

});

function readOutLoud(message) {

    if(message === 'create a website for me') {
        
        utterance = new SpeechSynthesisUtterance('Ok');
        speechSynthesis.speak(utterance);

        document.querySelector('input').value = 'Create A Website For Me';

        document.querySelector('.submit-btn').click();
        
    } else {

        utterance = new SpeechSynthesisUtterance('I don\'t understand u fucking bitch');
        speechSynthesis.speak(utterance);

        document.querySelector('input').value = utterance.text;

    }

}