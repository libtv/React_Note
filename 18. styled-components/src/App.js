import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
    const Circle = styled.div`
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: ${(props) => props.color || "red"};
    `;
    return (
        <div className="App">
            <Circle color={"black"} />
        </div>
    );
}

export default App;
