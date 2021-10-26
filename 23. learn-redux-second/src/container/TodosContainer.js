import React from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainers() {
    const todos = useSelector((state) => {
        return state.todos;
    });
    const dispatch = useDispatch();

    const onClick = (text) => {
        dispatch(addTodo(text));
    };

    const onToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    return (
        <>
            <Todos todos={todos} onClick={onClick} onToggle={onToggle}></Todos>
        </>
    );
}

export default TodosContainers;
