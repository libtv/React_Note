import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../moduels/counter";
import Counter from "../components/Counter";

export default function CounterContainer() {
    const state = useSelector((state) => {
        return state.conuter;
    });

    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    return (
        <div className="counter_container">
            <Counter onDecrease={onDecrease} onIncrease={onIncrease} number={state}></Counter>
        </div>
    );
}
