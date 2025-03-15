import './index.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-semibold pb-2'>QuickStop</h1>

        <div className='text-xl font-semibold py-4 flex gap-1'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className='w-full max-w-sm flex flex-row justify-evenly'>
          {running ? (
            <button
              className='border rounded-lg bg-red-500 text-white py-1 px-3 hover:bg-red-600'
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className='border rounded-lg bg-blue-500 text-white py-1 px-3 hover:bg-blue-600'
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )}

          <button
            className='border rounded-lg bg-green-500 text-white py-1 px-3 hover:bg-green-600'
            onClick={() => { setTime(0); setRunning(false); }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
