import './App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';
import alesoft from './assets/alesoft.png';
import { useState } from 'react';

function App() {

  // Main state: number of clicks
  const [clicks, setClicks] = useState(0);

  // Function called when "Click" button is pressed
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // Function to reset the click counter
  const resetCounter = () => {
    setClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={alesoft}
          alt='Alesoft Logo'
        />
      </div>
      <div className='main-container'>
        <Counter clicks={clicks} />
        <Button text="Click" isClickButton={true} handleClick={handleClick} />
        <Button text="Reset" isClickButton={false} handleClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
