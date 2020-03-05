import React, {useState, useEffect} from 'react';

 
const HookCounterOne = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title = `you clicked ${count} times` 
    })
    return (
        <div>
           <button onClick = {() => setCount(count + 1)}>{count} times</button> 
        </div>
    );
}
 
export default HookCounterOne;