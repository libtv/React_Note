import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import PaperSubmit from "./components/TodoSubmit";
import TodoTemplate from "./components/TodoTemplate";
import ContextProvider from "./ContextProvider";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #808080;
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ContextProvider>
                <TodoTemplate>
                    <TodoHead></TodoHead>
                    <TodoList></TodoList>
                    <PaperSubmit></PaperSubmit>
                </TodoTemplate>
            </ContextProvider>
        </>
    );
}

export default App;
