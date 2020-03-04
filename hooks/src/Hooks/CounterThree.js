import React, { useState } from "react";

function CounterThree() {
  //Declare a new state variable, which we'll call "count"

  // useState with Object with Spread Operator
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
     <label> Type FirstName:</label> 
     <input
        type="text"
        value={name.firstName}
        onChange={e => setName({...name, firstName: e.target.value })}
      />
      <br />
      <br />

      <label>Type LastName:</label>
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({...name, lastName: e.target.value })}
      />
      <h2>your first name is - {name.firstName}</h2>
      <h2>your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default CounterThree;
