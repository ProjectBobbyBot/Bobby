import React from 'react'
import SpeechSynthesisSpeaker from './components/SpeechSynthesisSpeaker'


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


function SpeechRecog() {
    document.getElementById("wavy").className = "wave";
    var recog = new SpeechRecognition();

        recog.onresult = (event)=> {
            if(event.results.length > 0) {
                document.getElementById("wavy").className = "wave-active";

                
                
            }
            else {
                document.getElementById("wavy").className = "wave";
                
                //just for now
                return;
              
            }
        }


    return(
        <div>..</div>
    );
}


export default SpeechRecog;