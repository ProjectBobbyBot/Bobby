import React from 'react';

const TTS = window.speechSynthesis;



function SpeechSynthesisSpeaker(utteranceParam) {

    if (!(window.speechSynthesis)) {
        alert("Your browser is not capable of speech synthesis.")
        return
    }

    let utterance = new SpeechSynthesisUtterance(utteranceParam);


    TTS.cancel()
    

    TTS.speak(utterance)

    
    return (
        <div>..</div>
    );
    

}

export default SpeechSynthesisSpeaker;