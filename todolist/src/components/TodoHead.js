import React from "react";
import styled, { css } from "styled-components";
import { useTodoContext } from "../TodoContext";

const TodoHeadBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 30px;
    border-bottom: 1px solid #868e96;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead({ children, ...rest }) {
    const state = useTodoContext();
    const todoState = state.filter((todo) => {
        return todo.done !== false;
    });
    return (
        <>
            <TodoHeadBox {...rest}>
                <h1>2019년 7월 10일</h1>
                <div className="day">수요일</div>
                <div className="tasks-left">할 일 {todoState.length}개 남음</div>
            </TodoHeadBox>
        </>
    );
}

export default TodoHead;
