import React from "react";
import styled, { css } from "styled-components";

const TodoTemplateBox = styled.div`
    width: 512px;
    height: 728px;
    margin: 0 auto;
    margin-top: 100px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    display: flex;
    flex-direction: column;
    position: relative;
`;

function TodoTemplate({ children, ...rest }) {
    return (
        <>
            <TodoTemplateBox {...rest}>{children}</TodoTemplateBox>
        </>
    );
}

export default TodoTemplate;
