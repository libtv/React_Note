import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoProvider from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoProvider>
                <TodoTemplate>
                    <TodoHead></TodoHead>
                    <TodoList></TodoList>
                    <TodoCreate></TodoCreate>
                </TodoTemplate>
            </TodoProvider>
        </>
    );
}

export default App;
