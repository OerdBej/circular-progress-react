import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  //todo 10: setting up the props for ProgressBar. progress as intiger or decimale number.the strokeWidth is the width of the circle

  const state = {
    size: 250,
    progress: 40,
    strokeWidth: 15,
    circleOneStroke: "#d9edfe",
    circleTwoStroke: "#7ea9e1",
  };

  //todo11: we are going to pass the object into the component and distructure it. We can do it with the destructure mode or we can do it more "manually". We can use it in this way or in the more old fashioned way and they are totally the same.So we defined it as an object and destructure it in the components and passing it as a state and getting this with props to the other page. So we can change the value inside of the object and we are going to add a new proprety and we can added in this.

  return (
    <div className='App'>
      <div className='App-header'>
        <ProgressBar {...state} />
        {/* <ProgressBar size="250" progress={40}/> */}
        <p>Progress Bar</p>
        <a
          rel='noopener noreferrer'
          href='https://reactjs.org'
          className='App-link'
          target='_blank'
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default App;
