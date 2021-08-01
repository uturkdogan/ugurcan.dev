import { convertNumberToText } from "./numberToWords.js"
import { setupSpanishSpeechSynthesis, speakWord } from "./speechSpanish.js"

let MAX_NUMBER = 199;

const randomNumber = () => {
    return Math.floor(Math.random() * MAX_NUMBER);
}

/**
 * Sets up new number on the display
 * @param {boolean} is_text If this variable is set to true, text will be shown.
 */
const newNumber = (is_text) => {
    let numberBox = document.getElementById("numberBox");
    let textBox = document.getElementById("textBox");
    let number = randomNumber();
    let text = convertNumberToText(number);

    console.log("Number: ", number);
    console.log("Text: ", text);

    textBox.classList.add('hidden');

    if (is_text === true) {
        numberBox.innerText = text;
        textBox.innerText = number;
    } else {
        numberBox.innerText = number;
        textBox.innerText = text;
    }

}

/**
 * Adds onclick event that shows the hidden area
 * and speak the text.
 */
const setUpOnClick = () => {
    let numberBox = document.getElementById("numberBox");
    numberBox.onclick = () => {
        let textBox = document.getElementById("textBox");
        textBox.classList.remove("hidden");
        let number = numberBox.innerText;
        speakWord(number);
    }
}

const onLoad = () => {
    let speechEnabled = setupSpanishSpeechSynthesis();

    if (!speechEnabled) {
        let warningBox = document.getElementById("speech-error");
        warningBox.innerText = "No Spanish speech support was found. Speech is disabled."
    }

    if (Math.random() > 0.5) {
        newNumber(true);
    } else {
        newNumber(false);
    }
    setUpOnClick();
}

window.onload = onLoad;
