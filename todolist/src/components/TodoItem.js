import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBox = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: block;
        }
    }
`;

const CircleItem = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid tomato;
    display: flex;
    align-items: center;
    margin-right: 20px;
    ${(props) => {
        if (props.done)
            return css`
                color: darkgray;
                border-color: darkgray;
            `;
    }}
`;

const TextItem = styled.div`
    width: 100%;
    font-size: 21px;
    ${(props) => {
        if (props.done)
            return css`
                color: #ced4da;
            `;
    }}

    margin-right: 20px;
`;

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = useCallback(() => {
        dispatch({
            type: "TOGGLE",
            id,
        });
    });
    const onRemove = () => dispatch({ type: "REMOVE", id });

    return (
        <>
            <TodoItemBox>
                <CircleItem id={id} done={done} onClick={onToggle}>
                    {done && <MdDone className="md" />}
                </CircleItem>
                <TextItem done={done}>{text}</TextItem>
                <Remove>
                    <MdDelete onClick={onRemove}></MdDelete>
                </Remove>
            </TodoItemBox>
        </>
    );
}

export default TodoItem;
