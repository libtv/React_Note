import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Abouts from "./routes/Abouts";
import Profile from "./Profile";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to={"/"}>홈</Link>
                </li>
                <li>
                    <Link to={"/abouts"}>어바웃</Link>
                </li>
            </ul>
            <Route path={"/"} exact={true} component={Home}></Route>
            <Route path={"/abouts"} component={Abouts}></Route>
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
}

export default App;
