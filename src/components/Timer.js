import React, { useEffect, useState } from 'react';
let intervalId;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        setRunning(prevState => !prevState);
      }
    });
  }, [])

  useEffect(() => {
    if(running) {
      intervalId = setInterval(() => {
        setTime(prevState => prevState += 1)
      }, 1000)
    } else {
     
      clearInterval(intervalId)
    }
  }, [running])

  return (
    <>
    <p>{time}</p>
    </>
  )
}

export default Timer;
