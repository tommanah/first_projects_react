import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running])

  return (
    <div className='App'>
      <h1>01-time switch</h1>
      <div className='time'>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      {running && <button onClick={() => {setRunning(false)}} style={{color: 'red'}}>stop</button>}
      {!running && <button onClick={() => {setRunning(true)}} style={{color: 'green'}}>start</button>}
      <button onClick={() => {setTime(0)}}>restart</button>
    </div>
  );
}

export default App;
