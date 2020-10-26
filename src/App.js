import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BobbyMouth from './components/BobbyMouth';
const mainText = "hello, world!"


function SpeechRecog() {
  
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
  SpeechRecog()
}
function OnVoiceEnter() {
  
}