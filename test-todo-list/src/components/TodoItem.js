import styled, { css } from "styled-components";
import { MdCancel, MdDone, MdDelete, MdColorize } from "react-icons/md";
import { MySetValue } from "../ContextProvider";
import { useCallback } from "react";

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: red;
    }
    display: none;
    margin-left: 10px;
`;

const CircleItem = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid red;
    border-radius: 50%;
    font-size: 20px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    ${(props) => {
        if (props.done == true)
            return css`
                color: gray;
                border: 1px solid gray;
            `;
    }}
`;

const PaperItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    align-items: center;
    padding-right: 50px;
    box-sizing: border-box;

    &:hover {
        ${CircleItem} {
            color: blue;
            border: 1px solid blue;
        }
        ${Remove} {
            display: initial;
        }
    }
`;

const TextItem = styled.h3`
    color: black;
    font-size: 20px;
    font-weight: 400;

    ${(props) => {
        if (props.done == true)
            return css`
                color: gray;
            `;
    }}
`;

function TodoItem({ children, ...rest }) {
    const dispatch = MySetValue();

    const onRemove = useCallback(() => {
        return dispatch({ type: "REMOVE", id: rest.id });
    });

    const onToggle = useCallback(() => {
        return dispatch({ type: "TOGGLE", id: rest.id });
    });

    return (
        <>
            <PaperItem>
                <CircleItem {...rest} onClick={onToggle}>
                    <MdDone {...rest} />
                </CircleItem>
                <TextItem {...rest}>{children}</TextItem>
                <Remove>
                    <MdDelete onClick={onRemove} />
                </Remove>
            </PaperItem>
        </>
    );
}

export default TodoItem;
