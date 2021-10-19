import "./App.css";
import react, { useCallback, useReducer, useRef } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser";

function App() {
    return (
        <div>
            <CreateUser />
            <UserList />
            <div>활성화된 사용자 수 : 0</div>
        </div>
    );
}

export default App;
