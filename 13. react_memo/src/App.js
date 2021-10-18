import "./App.css";
import react, { useRef, useState, useMemo, useEffect, useCallback } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser";
import MyRoom from "./MyRoom";

function App() {
    const [input, setInputs] = useState({
        name: "",
        email: "",
    });

    const { name, email } = input;

    const [users, setUsers] = useState([
        { id: 0, name: "John", email: "john@gmail.com", active: true },
        { id: 1, name: "Smith", email: "smith@gmail.com", active: false },
        { id: 2, name: "Park", email: "park@gmail.com", active: false },
        { id: 3, name: "Kim", email: "kim@gmail.com", active: false },
    ]);
    var nextId = useRef(5);

    var count = useMemo(() => countActiveUsers(users), users);

    return (
        <div>
            <CreateUser name={name} email={email} onChange={onChange} onClick={onClick} />
            <UserList users={users} onToggle={onToggle} onDelete={onDelete} />
            <div>활성화된 사용자 수 : {count}</div>
        </div>
    );

    function onChange(e) {
        var { name, value } = e.target;
        setInputs({ ...input, [name]: value });
    }

    function onClick() {
        console.log("onClick 이 호출되었습니다.");
        setUsers([...users, { id: nextId.current++, name, email, active: false }]);
    }

    function onToggle(userId) {
        setUsers(
            users.map((user) => {
                return userId === user.id ? { ...user, active: true } : user;
            })
        );
    }

    function onDelete(userId) {
        var newArr = [];
        users.map((user) => {
            return user.id !== userId ? newArr.push(user) : "";
        });

        setUsers([...newArr]);
    }

    function countActiveUsers(users) {
        console.log("활성 사용자 수를 세는중...");
        var s = users.filter((user) => {
            return user.active == true;
        });
        return s.length;
    }
}

export default App;
