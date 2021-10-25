import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import styled, { css } from "styled-components";

const MyList = styled.h3`
    color: red;
    font-size: 15px;
`;

const initialState = {
    loading: true,
    data: null,
};

const MyButton = styled.button`
    font-size: 20px;
    background-color: aquamarine;
    ${(props) => {
        if (props.visible)
            return css`
                display: none;
            `;
    }}
`;

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true,
            };

        case "RENDER":
            return {
                ...state,
                loading: false,
                data: action.data,
            };
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loading, data } = state;

    useEffect(async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({
            type: "RENDER",
            data: response.data,
        });
    }, [loading]);

    const onClick = useCallback(() => {
        dispatch({
            type: "LOADING",
        });
    });

    return (
        <div className="App">
            <>
                {loading
                    ? "로딩중입니다."
                    : data.map((list) => {
                          return (
                              <MyList>
                                  {list.id} : {list.name} - {list.email}
                              </MyList>
                          );
                      })}
                <MyButton onClick={onClick} visible={loading}>
                    다시 불러오기
                </MyButton>
            </>
        </div>
    );
}

export default App;
