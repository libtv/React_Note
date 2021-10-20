import React from "react";
import styled, { css } from "styled-components";
import { useTodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBox = styled.div`
    width: 100%;
    height: 100%;

    padding: 20px;
    box-sizing: border-box;
    background-color: aliceblue;

    padding-bottom: 110px;
`;

function TodoList({ children, ...rest }) {
    const state = useTodoContext();

    return (
        <>
            <TodoListBox {...rest}>
                {state.map((todo) => {
                    return <TodoItem id={todo.id} text={todo.text} done={todo.done}></TodoItem>;
                })}
            </TodoListBox>
        </>
    );
}

export default TodoList;
