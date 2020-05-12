import React, { useEffect } from "react";
import "./App.css";
import AudioPlayer from "../src/components/AudioPlayer";

// yarn add soundfont-player

function App() {
  const audioPlayer = AudioPlayer();
  // array of notes used, low to high notes
  const notesArray = ["C2", "D2", "E2", "F2", "G2", "A2", "B2", "C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", 
                      "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"];

  // array of keys pressed
  const keyArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l",
                    "z", "x", "c", "v", "b","n","m"];

  // sets the instrument being used
  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  // handles pressing down keys and matching it with the note, logs array index and note.
  const handleClick2 = (event) => {
    let keyArrayIndex = keyArray.indexOf(event.key);
    let keyMatch = notesArray[keyArrayIndex];
    console.log(keyArrayIndex);
    console.log(keyMatch);
    audioPlayer.playNote(keyMatch);   
  }

  // temp, press button to start playing
  return (
    <div className="app-container">
      <button onKeyDown={handleClick2}>Play</button>
    </div>
  );
}

export default App;