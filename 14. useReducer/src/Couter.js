import react, { useState } from "react";

function Counter() {
    var [number, setNumber] = useState(0);

    function onIncrease() {
        setNumber(++number);
    }

    function onDecrease() {
        setNumber(--number);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
