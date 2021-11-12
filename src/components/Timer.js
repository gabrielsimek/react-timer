import React, { useEffect, useState } from 'react';

// 

const Timer = () => {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      
      if (e.code === 'Space') {
        setRunning(prevState => !prevState);
        const intervalId = setInterval(() => {
          if (!running) {
            setTime(prevState => prevState += 1)
          } else {
            clearInterval(intervalId);
          }
        }, 100)
      }
    });
  })

  return (
    <>
    <p>{time}</p>
    </>
  )
}

export default Timer;
