import logo from "./logo.svg";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import TodosContainers from "./container/TodosContainer";

function App() {
    return (
        <div className="App">
            <CounterContainer></CounterContainer>
            <TodosContainers></TodosContainers>
        </div>
    );
}

export default App;
