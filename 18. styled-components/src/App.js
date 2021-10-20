import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";
import react, { useReducer, useCallback } from "react";

export const UserDispatch = react.createContext(null);

const AppBlock = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
    display: flex;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function App() {
    function reducer(state, action) {
        switch (action.type) {
            case "ENABLE":
                console.log("확인");
                if (state) {
                    return state;
                } else {
                    return !state;
                }
            case "DISABLE":
                console.log("취소");
                if (state) {
                    return !state;
                } else {
                    return state;
                }
        }
    }

    const initState = false;
    const [state, dispatch] = useReducer(reducer, initState);

    const onEnable = useCallback(() => {
        return dispatch({ type: "ENABLE" });
    }, []);

    return (
        <div className="App">
            <ThemeProvider
                theme={{
                    palette: {
                        blue: "#228be6",
                        gray: "#495057",
                        pink: "#f06595",
                    },
                }}
            >
                <AppBlock>
                    <ButtonGroup>
                        <Button size="small">BUTTON</Button>
                        <Button>BUTTON</Button>
                        <Button size="large">BUTTON</Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button size="small" color="gray">
                            BUTTON
                        </Button>
                        <Button color="gray">BUTTON</Button>
                        <Button size="large" color="gray">
                            BUTTON
                        </Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button size="small" color="pink">
                            BUTTON
                        </Button>
                        <Button color="pink">BUTTON</Button>
                        <Button size="large" color="pink" onClick={onEnable}>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <UserDispatch.Provider value={dispatch}>
                    <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" visible={state}>
                        데이터를 정말로 삭제하시겠습니까?
                    </Dialog>
                </UserDispatch.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
