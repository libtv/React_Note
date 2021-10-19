import "./App.css";
import react, { useCallback, useReducer, useRef } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser";

function App() {
    const initialState = {
        input: { name: "", email: "" },
        users: [
            { id: 0, name: "John", email: "john@gmail.com", active: true },
            { id: 1, name: "Smith", email: "smith@gmail.com", active: false },
            { id: 2, name: "Park", email: "park@gmail.com", active: false },
            { id: 3, name: "Kim", email: "kim@gmail.com", active: false },
        ],
    };

    function reducer(state, action) {
        switch (action.type) {
            case "CHANGE_INPUT":
                return {
                    ...state,
                    input: { ...state.input, [action.name]: action.value },
                };

            case "SUBMIT_INPUT":
                return {
                    input: initialState.input,
                    users: state.users.concat(action.userId),
                };

            case "REMOVE_USER":
                return {
                    ...state,
                    users: state.users.filter((user) => {
                        return user.id !== action.userId;
                    }),
                };

            case "TOGGLE_USER":
                return {
                    ...state,
                    users: state.users.map((user) => {
                        return user.id === action.userId ? { ...user, active: true } : user;
                    }),
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const { users, input } = state;
    const { name, email } = input;

    const nextId = useRef(4);

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            dispatch({
                type: "CHANGE_INPUT",
                name,
                value,
            });
        },
        [input]
    );

    const onClick = useCallback(() => {
        dispatch({
            type: "SUBMIT_INPUT",
            userId: {
                id: nextId.current++,
                name,
                email,
            },
        });
    }, [name, email]);

    const onDelete = useCallback(
        (userId) => {
            dispatch({
                type: "REMOVE_USER",
                userId,
            });
        },
        [users]
    );

    const onToggle = useCallback(
        (userId) => {
            dispatch({
                type: "TOGGLE_USER",
                userId,
            });
        },
        [users]
    );

    return (
        <div>
            <CreateUser name={name} email={email} onChange={onChange} onClick={onClick} />
            <UserList users={users} onToggle={onToggle} onDelete={onDelete} />
            <div>활성화된 사용자 수 : 0</div>
        </div>
    );
}

export default App;
