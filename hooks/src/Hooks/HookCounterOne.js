import React, {useState, useEffect} from 'react';
// useEffect = ComponentDidMount() + ComponentDidUpdate() + ComponentWillUnMount()
 
const HookCounterOne = () => {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('')

    useEffect(() => {
     console.log('useEffect- Updating Document title' )
      document.title = `you clicked ${count} times` 
    }, [count])
    return (
        <div>
            <input type = "text" value = {name} onChange = {e => setName(e.target.value)}/>
           <button onClick = {() => setCount(count + 1)}>{count} times</button> 
        </div>
    );
}
 
export default HookCounterOne;