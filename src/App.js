import React, { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  //14: setting up the useState in order to make the change from the user

  const [progress, setProgress] = useState(0);

  //15: this is the function from the button that graps the event of the user and then we get the value and update it and using the states. So now the progress in the State props it changes from onChange function to the first state.

  const onChange = (e) => {
    if (e.target.value) {
      let progress = parseInt(e.target.value, 10);
      if (progress > 100) {
        progress = 100;
      }
      setProgress(progress);
    } else {
      setProgress(0);
    }
  };

  //18: Create the function from the button randomize event.Whenever that is clicked we set up a random value.

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
  };

  //10: setting up the props for ProgressBar. progress as intiger or decimale number.the strokeWidth is the width of the circle

  const state = {
    size: 250,
    progress: progress,
    // progress: 40, => it changes now from onChange method, its settin
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "#7ea9e1",
  };

  //11: we are going to pass the object into the component and distructure it. We can do it with the destructure mode or we can do it more "manually". We can use it in this way or in the more old fashioned way and they are totally the same.So we defined it as an object and destructure it in the components and passing it as a state and getting this with props to the other page. So we can change the value inside of the object and we are going to add a new proprety and we can added in this.

  return (
    <div className='App'>
      <div className='App-header'>
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
