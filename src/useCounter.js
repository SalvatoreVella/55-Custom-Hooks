import { useState, useEffect} from "react";

export const useCounter = (value) => {
    const [counter, setCounter] = useState(value);

    function onCounterChange(counter) {
        console.log("The current number is " + counter);
    }

    useEffect(() => onCounterChange(counter), [counter]);

    function onIncrement(){
        setCounter(pre => pre + 1)
    }

    function onReset(){
        setCounter(() => value)
    }
    
    function onDecrement(){
        setCounter(pre => pre - 1)
    }
    return {
        counter: counter,
        onDecrement: onDecrement,
        onIncrement: onIncrement,
        onReset: onReset,
    }
}