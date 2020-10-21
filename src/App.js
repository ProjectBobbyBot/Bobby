import React from 'react';
import logo from './logo.svg';
import './App.css';
import BobbyMouth from './components/BobbyMouth';
import SpeechSynthesisSpeaker from './components/SpeechSynthesisSpeaker'

const mainText = "hello, world!"
function App() {
  return (

    <div>
      <BobbyMouth></BobbyMouth>
      <SpeechSynthesisSpeaker utteranceParam="Hello, World!"></SpeechSynthesisSpeaker>
    </div>
    
    
  );
}

export default App;
