import React, { useState } from "react";

function CounterTwo() {
  //Declare a new state variable, which we'll call "count"
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);


   // using prevCount we are calculating the exact state
  const incrementTen = () => {
    for(let i = 0; i < 10; i++){
        setCount(prevCount => prevCount + 1);
    }
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() =>setCount(prevCount => prevCount + 1)}>Addition</button>
      <button onClick={() =>setCount(prevCount => prevCount - 1)}>Subtraction</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => incrementTen()}>incrementTen10</button>
    </div>
  );
}

export default CounterTwo;
