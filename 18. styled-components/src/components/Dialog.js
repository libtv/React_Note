import styled, { css, keyframes } from "styled-components";
import Button from "./Button";
import { UserDispatch } from "../App";
import { useContext, useCallback } from "react";

const BackGround = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

const fadeIn = keyframes`
    from {
    opacity: 0
    }
    to {
    opacity: 1
    }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 10px;
    background: white;

    h3 {
        padding-left: 10px;
    }

    p {
        padding-left: 10px;
        padding-bottom: 15px;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
    padding: 0 10px;
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
`;

function Dialog({ title, children, confirmText, cancelText, visible }) {
    const dispatch = useContext(UserDispatch);

    const onDisable = useCallback(() => {
        return dispatch({ type: "DISABLE" });
    }, []);

    if (!visible) return null;
    return (
        <BackGround>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button color="blue" size="small" onClick={onDisable}>
                        {confirmText}
                    </Button>
                    <Button color="pink" size="small" onClick={onDisable}>
                        {cancelText}
                    </Button>
                </ButtonGroup>
            </DialogBlock>
        </BackGround>
    );
}

export default Dialog;
