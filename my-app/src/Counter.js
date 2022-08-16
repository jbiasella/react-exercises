import React, { useEffect, useState } from 'react';

export function HookCounter({initialValue = 0, onCounterChange}){
    const [counter, setCounter] = useState(initialValue);

    useEffect(()=>{
        const intervalCounter = setInterval(()=>{ setCounter(counter + 1)},1000)
        return () =>{clearInterval(intervalCounter)}}, [counter])

    function handleCounterIncrement(){
        setCounter(c => c + 1)
    }

    function handleCounterReset(){
        setCounter(initialValue)
    }

    return(<div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterReset}>Reset</button>
        </div>)
}