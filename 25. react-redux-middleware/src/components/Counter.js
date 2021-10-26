import React from "react";

export default function Counter({ onIncrease, onDecrease, number }) {
    return (
        <div className="counter">
            <h2>{number}</h2>
            <button onClick={onIncrease}>increase</button>
            <button onClick={onDecrease}>decrease</button>
        </div>
    );
}
