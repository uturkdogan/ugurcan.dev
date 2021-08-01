/**
 * Set up spanish speech.
 */

/**
 * Spanish language codes, in order of preference.
 */
let languageCodes = [
    "es-MX",
    "es-419",
]

var selectedLanguage = null;

/**
 * 
 * @returns If speech synthesis will work.
 */
export const setupSpanishSpeechSynthesis = () => {
    if (!'speechSynthesis' in window) {
        return false;
    }
    var voices = speechSynthesis.getVoices();
    voices.forEach(function(voice, i) {
        languageCodes.forEach(function(languageCode, i) {
            if (languageCode == voice.lang) {
                selectedLanguage = voice.lang;
                return;
            }
        });
        if (selectedLanguage !== null) {
            return;
        }
    });
    console.log("Speech language: ", selectedLanguage)
    return selectedLanguage !== null;
}

export const speakWord = (word) => {
    if (selectedLanguage === null) {
        console.log("No voice to speak");
        return;
    }
    var utterThis = new SpeechSynthesisUtterance(word);
    utterThis.lang = selectedLanguage;
    speechSynthesis.speak(utterThis);
}
