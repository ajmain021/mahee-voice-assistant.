const synth = window.speechSynthesis;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    document.getElementById('response').innerText = `You said: ${command}`;
    respond(command);
};

function startRecognition() {
    recognition.start();
}

function respond(command) {
    let responseText = "";
    if (command.includes("hello")) {
        responseText = "Hello! How can I help you today?";
    } else if (command.includes("your name")) {
        responseText = "My name is Mahee.";
    } else if (command.includes("time")) {
        responseText = `The time is ${new Date().toLocaleTimeString()}`;
    } else if (command.includes("date")) {
        responseText = `Today's date is ${new Date().toLocaleDateString()}`;
    } else {
        responseText = "I'm not sure how to respond to that.";
    }
    speak(responseText);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices().find(voice => voice.name.includes('Google US English Female'));
    synth.speak(utterance);
    document.getElementById('response').innerText = text;
}
