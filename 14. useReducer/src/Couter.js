import react, { useState, useReducer } from "react";

function Counter() {
    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0);

    function onIncrease() {
        dispatch({ type: "INCREMENT" });
    }

    function onDecrease() {
        dispatch({ type: "DECREMENT" });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
