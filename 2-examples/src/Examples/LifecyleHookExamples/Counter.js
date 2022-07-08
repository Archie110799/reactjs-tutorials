import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  // Sử dụng state
  const [count, setCount] = useState(0);

  const timer = useRef(null);

  // Updating: Lifecycle
  useEffect(() => {
    // component mount
    console.log('🔥Component update');
  });

  //
  useEffect(() => {
    // component mount
    console.log('🔥Component mounting');
    // useRef value stored in .current property
    timer.current = setInterval(() => {
      console.log('Timer running');
      setCount((v) => v + 1);
    }, 1000);
  }, []); //Dependencies

  useEffect(() => {
    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div>
      <div>Interval is working, count is: {count}</div>
    </div>
  );
}

export default Counter;
