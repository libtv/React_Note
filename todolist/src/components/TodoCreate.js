import React, { useCallback, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 720deg );
  }
`;

const InsertFormPosition = styled.div`
    height: 100px;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${(props) => {
        if (props.visible)
            return css`
                background-color: gray;
            `;
    }}
`;

const InsertForm = styled.form`
    width: 100%;
    padding: 5px 30px;
    box-sizing: border-box;

    ${(props) => {
        if (props.visible) {
            return css`
                display: block;
            `;
        } else {
            return css`
                display: none;
            `;
        }
    }}
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

const IconPlace = styled.div`
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;

    margin-bottom: -25px;
    font-size: 50px;
    border-radius: 50%;
    cursor: pointer;

    &:active {
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${Rotate};
        animation-fill-mode: forwards;
    }

    ${(props) => {
        if (props.visible) {
            return css`
                background-color: red;
                &:hover {
                    background-color: tomato;
                    &:active {
                        background-color: brown;
                    }
                }
            `;
        } else {
            return css`
                background-color: aqua;
                &:hover {
                    background-color: antiquewhite;
                    &:active {
                        background-color: aquamarine;
                    }
                }
            `;
        }
    }}
`;

function TodoCreate({ done, text }) {
    const defaultInitial = false;
    const [state, action] = useState(defaultInitial);
    const defaultinitValue = "";
    const [value, setValue] = useState(defaultinitValue);
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const callbackActions = useCallback(() => {
        console.log(state);
        return action(!state);
    }, [state]);

    const onChange = (e) => {
        e.preventDefault();
        var text = e.target.value;
        return setValue(text);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current++,
                text: value,
                done: false,
            },
        });
        setValue("");
        action(false);
    };

    return (
        <>
            <InsertFormPosition visible={state}>
                <InsertForm visible={state} onSubmit={onSubmit}>
                    <Input placeholder="할 일을 입력한 후 Enter를 누르세요." onChange={onChange} value={value} />
                </InsertForm>
                <IconPlace visible={state}>
                    <MdAdd onClick={callbackActions} />
                </IconPlace>
            </InsertFormPosition>
        </>
    );
}

export default TodoCreate;
