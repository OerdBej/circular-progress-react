import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  //19:
  const [color, setColor] = useState(0);
  const colorArray = [
    "#7ea9e1",
    "#ed004f",
    "#00fcf0",
    "#d2fc00",
    "#7bff00",
    "#fa6900",
  ];

  //20:
  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };
  //14:
  const [progress, setProgress] = useState(0);
  //15:
  const onChange = (e) => {
    if (e.target.value) {
      let progress = parseInt(e.target.value, 10);
      if (progress > 100) {
        progress = 100;
      }
      setProgress(progress);
      const randomProgressValue = randomColor();
      setColor(randomProgressValue);
    } else {
      setProgress(0);
    }
  };

  //18:
  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    const randomProgressValue = randomColor();
    setColor(randomProgressValue);
  };

  //10:
  const state = {
    size: 250,
    progress: progress,
    // progress: 40,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: color,
  };

  //11:

  //17:
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Progress</h1>
        <ProgressBar {...state} />
        {/* <ProgressBar size="250" progress={40}/> */}
        <p>
          <input
            type='text'
            name='percent'
            placeholder='Add Progress Value'
            onChange={onChange}
          />
        </p>

        <button onClick={randomProgressValue}>Random</button>
      </div>
    </div>
  );
};

export default App;
