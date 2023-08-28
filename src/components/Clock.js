import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Kolkata', 
    };
    return new Intl.DateTimeFormat('en-IN', options).format(date);
  };

  return (
    <div className="clock">
      {formatTime(time)}
    </div>
  );
}

export default Clock;
