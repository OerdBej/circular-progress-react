import "./App.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <ProgressBar />
        <p>
          Edit<code>src/App.js</code>and save to reload
        </p>
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
