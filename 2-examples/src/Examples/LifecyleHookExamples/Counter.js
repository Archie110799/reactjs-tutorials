import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  // Sử dụng state
  const [count, setCount] = useState(0);

  const timer = useRef(null);

  // Updating: Lifecycle

  //Effect
  //Clean up (in return)
  useEffect(() => {
    //every
    // component didmount, didupdate
    console.log('🔥Component update');
  });

  useEffect(() => {
    // ONCE - ONLY execute once after FIRST RENDER
    // component didmount
    console.log('🔥Component mounting');
    // useRef value stored in .current property

    // ASYNC Example
    // async function getData(){

    // }
    // getData();

  }, []); //Dependencies

  //
  useEffect(() => {
    // ONCE - ONLY execute once after FIRST RENDER
    // component didmount
    console.log('🔥Component mounting');
    // useRef value stored in .current property
    timer.current = setInterval(() => {
      console.log('Timer running');
      setCount((v) => v + 1);
    }, 1000);

    // clear on component willUnmount
    return () => {
      //execute before the next effect or unmount
      clearInterval(timer.current);
    };
  }, []); //Dependencies

  useEffect(() => {
    //On demand
    //ONLY execute once after FIRST RENDER or "count" state change
  },[count])

  return (
    <div>
      <div>Interval is working, count is: {count}</div>
    </div>
  );
}

export default Counter;
