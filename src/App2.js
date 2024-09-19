import React, { useState, useEffect } from 'react';
import './App.css';  

const CounterApp = () => {

    const [firstCounter, setFirstCounter] = useState(0);


    const [secondCounter, setSecondCounter] = useState(0);


    useEffect(() => {
    setSecondCounter(firstCounter * 2);
    console.log(`First counter: ${firstCounter}, Second counter (double): ${secondCounter}`);
  }, [firstCounter]);


  const increaseFirstCounter = () => {
    setFirstCounter(firstCounter + 1);
  };

  const decreaseFirstCounter = () => {
    setFirstCounter(firstCounter - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter App</h2>


      <div>
        <h3>First Counter: {firstCounter}</h3>
        <button onClick={increaseFirstCounter}>Increase</button>
        <button onClick={decreaseFirstCounter}>Decrease</button>
      </div>


      <div style={{ marginTop: '20px' }}>
        <h3>Second Counter (Double of First): {secondCounter}</h3>
      </div>
    </div>
  );
};

export default CounterApp;
