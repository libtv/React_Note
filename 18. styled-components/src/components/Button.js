import react from "react";
import styled, { css } from "styled-components";

/* 색상 */
const colorPicker = css`
    ${(props) => {
        const theme = props.theme;
        const color = props.color;
        const myColor = theme.palette[color];
        return css`
            background-color: ${myColor};
        `;
    }}
`;

const sizePicker = css`
    ${(props) => {
        const size = props.size;

        if (size === "small") {
            return css`
                width: 50px;
                font-size: 10px;
            `;
        } else if (size == -"mid") {
            return;
        } else if (size === "large") {
            return css`
                width: 200px;
                font-size: 25px;
            `;
        }
    }}
`;

const StyledButton = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    padding: 5px 0;
    height: 35px;
    width: 100px;
    border: 1px solid black;
    align-items: center;
    margin-left: 10px;
    background: #228be6;
    margin-bottom: 10px;

    ${colorPicker}
    ${sizePicker}

    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }
`;

function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
    color: "blue",
    size: "mid",
};

export default Button;
