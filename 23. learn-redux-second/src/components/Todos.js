import React, { useState } from "react";
import TodoItem from "./TodoItem";

const initState = "";

function Todos({ todos, onClick, onToggle }) {
    const [state, dispatch] = useState(initState);

    const onChange = (e) => {
        e.preventDefault();
        const text = e.target.value;
        dispatch(text);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onClick(state);
        dispatch("");
    };

    return (
        <>
            <hr></hr>
            <div>
                <input type="text" placeholder="입력하세요" onChange={onChange} value={state}></input>
                <button onClick={onSubmit}>클릭</button>
                <ul>
                    {todos !== null
                        ? todos.map((val) => {
                              return <TodoItem value={val} />;
                          })
                        : null}
                </ul>
            </div>
        </>
    );
}

export default Todos;
