import React, { useState } from "react";

function CounterFour() {
  //Declare a new state variable, which we'll call "count"

  // useState with Array With Spread operator.
  const [items, setItems] = useState([]);

  const addItem =() => {
    setItems([...items, {
        id: items.length,
        value: Math.floor((Math.random() * 10) + 1)
        // value: 10
    }])
  }
  return (
    <div>
        <button onClick = {addItem}>Add a Number</button>
        <ul>
           {items.map(item => (
            <li key = {items.id}>{items.value}</li>
           ))}
        </ul>
    </div>
  );
}

export default CounterFour;
