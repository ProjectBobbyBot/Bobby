import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BobbyMouth from './components/BobbyMouth';
const mainText = "hello, world!"

function SpeechSynthesis(props) {

  return (
    <button onClick={() => {
      var utterance = new SpeechSynthesisUtterance(props.utterancent)
      utterance.voice = speechSynthesis.getVoices()[3]
      speechSynthesis.speak(utterance)
    }}></button>
  );
  

}


export default function App() {
  return (
    

    <div>
      <SpeechSynthesis utterancent="Hello and welcome to British Airways. Please enjoy our wonderful boarding song oaoaoaioaoooa. cicicici"></SpeechSynthesis>
      <BobbyMouth></BobbyMouth>

      
    </div>
    
  );
  
}

window.onload = () => {
  for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].click()
  }
}