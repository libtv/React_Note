import styled, { css } from "styled-components";

const PaperTemplate = styled.div`
    width: 600px;
    height: 800px;
    margin: 0 auto;
    margin-top: 60px;

    display: flex;
    flex-direction: column;

    background-color: wheat;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px black;
    position: relative;
`;

function TodoTemplate({ children }) {
    return (
        <>
            <PaperTemplate>{children}</PaperTemplate>
        </>
    );
}

export default TodoTemplate;
