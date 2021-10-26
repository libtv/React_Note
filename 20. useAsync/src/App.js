import axios from "axios";
import React, { useCallback, useEffect, useReducer } from "react";
import styled, { css } from "styled-components";
import useAsync from "./useAsync";

const MyList = styled.h3`
    color: red;
    font-size: 15px;
`;

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

const myFunction = () => axios.get("https://jsonplaceholder.typicode.com/users");

function App() {
    const [state, dispatch] = useAsync(myFunction, []);
    const { loading, data } = state;

    const onClick = () => {
        return dispatch();
    };

    return (
        <div className="App">
            <>
                {loading || data == null
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
