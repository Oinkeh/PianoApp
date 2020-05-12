import React, { useEffect } from "react";
import "./App.css";
import AudioPlayer from "../src/components/AudioPlayer";
function App() {
  const audioPlayer = AudioPlayer();
  const notesArray = ["E4", "G4", "B4", "D5"];
  const keyArray = ["q", "w", "e", "r"];

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handleClick = () => {
    audioPlayer.playNote("E4");
  };
  const handleClick1 = () => {
    audioPlayer.playNote("G4");
  };
  const handleClick2 = (event) => {
    let keyArrayIndex = keyArray.indexOf(event.key);
    let keyMatch = notesArray[keyArrayIndex];
    console.log(keyArrayIndex);
    console.log(keyMatch);
    audioPlayer.playNote(keyMatch);
  }

  return (
    <div className="app-container">
      <button onClick={handleClick}>Play</button>
      <button onClick={handleClick1}>Play</button>
      <button onKeyDown={handleClick2}>Play</button>
    </div>
  );
}

export default App;