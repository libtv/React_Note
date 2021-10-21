import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useCallback } from "react";
import { MySetValue, MyNextId, MyValue } from "../ContextProvider";

const Rotate = keyframes`
  from {
    transform: rotate( 0deg );
  }
  to {
    transform: rotate( 45deg );
  }
`;

const RotateReverse = keyframes`
  from {
    transform: rotate( 45deg );
  }
  to {
    transform: rotate( 0deg );
  }
`;

const PaperSubmit = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 130px;
    background-color: tomato;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ${(props) => {
        if (props.done) {
            return css`
                display: initial;
            `;
        } else {
            return css`
                display: none;
            `;
        }
    }}
`;

const MdStyleDiv = styled.div`
    color: aliceblue;
    position: absolute;
    bottom: 0;
    display: flex;
    width: fit-content;
    left: 44%;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    margin-bottom: -40px;
    background-color: aqua;
    border-radius: 50%;

    cursor: pointer;

    &:hover {
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }

    ${(props) => {
        if (props.done) {
            return css`
                transform: rotate(45deg);
                &:hover {
                    animation-name: ${RotateReverse};
                    transform: rotate(45deg);
                }
            `;
        } else {
            return css`
                &:hover {
                    animation-name: ${Rotate};
                    transform: rotate(45deg);
                }
            `;
        }
    }}
`;

const ActionForm = styled.form`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
`;

const ActionInput = styled.input`
    font-size: 20px;
    width: 100%;
    height: 35px;
    font-weight: 400;
    border-style: none;
    box-shadow: 1px 1px 1px 1px gray;
`;

function TodoSubmit({ children, ...rest }) {
    const initialAddVariable = false;
    const initialTextVariable = "";
    const [state, setVariable] = useState(initialAddVariable);
    const [stateText, setTextVariable] = useState(initialTextVariable);

    const onClick = useCallback(() => {
        return setVariable(!state);
    }, [state]);

    const onChange = useCallback(
        (e) => {
            const text = e.target.value;
            setTextVariable(text);
        },
        [stateText]
    );

    const dispatch = MySetValue();
    const nextID = MyNextId();
    const myValue = MyValue();

    const onCreate = (e) => {
        e.preventDefault();
        dispatch({ type: "CREATE", todo: { id: nextID.current++, done: false, text: stateText } });
        setTextVariable("");
        setVariable(initialAddVariable);
    };

    return (
        <>
            <PaperSubmit done={state}>
                <ActionForm onSubmit={onCreate}>
                    <ActionInput placeholder="입력하시고 엔터를 눌러주세요" onChange={onChange} value={stateText} />
                </ActionForm>
            </PaperSubmit>
            <MdStyleDiv done={state}>
                <MdAdd onClick={onClick} />
            </MdStyleDiv>
        </>
    );
}

export default TodoSubmit;
