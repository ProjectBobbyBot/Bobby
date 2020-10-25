import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BobbyMouth from './components/BobbyMouth';
const mainText = "hello, world!"


function SpeechRecogntion() {
  var SpeechRecogntion = SpeechRecogntion;
  var SpeechGrammarList = SpeechGrammarList;


  var grammar = '#JSGF V1.0;';

  var recogntion = new SpeechRecogntion();
  var speechRecogntionGrammarList = new SpeechGrammarList();
  speechRecogntionGrammarList.addFromString(grammar, 1);

  recogntion.grammers = speechRecogntionGrammarList;

  recogntion.lang = "en-US"
  recogntion.interimResults = false;


  var commandText = document.createElement("h3")

  recogntion.onresult = (event) => {
    var last = event.results.length - 1
    var cmd = event.results[last][0].transcript;
    
  
    commandText.textContent = "Command: " + cmd + "."

    document.body.appendChild(commandText)

    return cmd;

  }

  recogntion.onspeechend = () => {
    recogntion.stop()
  }

  recogntion.onerror = (event) => {
    commandText.textContent = "Error occured: " + event.error;
  }
}

function SpeechSynthesis(props) {

  return (
    <button onClick={() => {
      var utterance = new SpeechSynthesisUtterance(props.utterancent)
      var voicesInt = props.voicesInt;


      utterance.voice = speechSynthesis.getVoices()[parseInt(voicesInt)]
      speechSynthesis.speak(utterance)
    }}></button>
  );
  

}



export default function App() {
  return (
    

    <div>
      <SpeechSynthesis utterancent="Hello and welcome to British Airways. Please enjoy our wonderful boarding song oaoaoaioaoooa. cicicicicicicicicicicicicicicicicicicicicicicicicicicicici" voicesInt="3"></SpeechSynthesis>
      <BobbyMouth></BobbyMouth>

      
    </div>
    
  );
  
}

window.onload = () => {
  for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].click()
  }
  
}
function OnVoiceEnter() {
  
}