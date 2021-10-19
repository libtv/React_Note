import "./App.css";
import react, { useCallback, useReducer, useRef } from "react";
import UserList from "./UserList.js";
import CreateUser from "./CreateUser";
import useInput from "./hooks/useInput";

function App() {
    const nextIndex = useRef(4);

    function reducer(state, action) {
        switch (action.type) {
            case "CREATE_USER":
                return {
                    users: state.users.concat(action.user),
                };
            case "TOGGLE_USER":
                return {
                    users: state.users.map((user) => {
                        return user.id === action.userId ? { ...user, active: true } : user;
                    }),
                };
            case "DELETE_USER":
                return {
                    users: state.users.filter((user) => {
                        return user.id !== action.userId;
                    }),
                };
            default:
                break;
        }
        return state;
    }

    const initForm = { name: "", email: "" };
    const [form, onChange, reset] = useInput(initForm);

    const initialState = {
        users: [
            { id: 0, name: "John", email: "john@gmail.com", active: true },
            { id: 1, name: "Smith", email: "smith@gmail.com", active: false },
            { id: 2, name: "Park", email: "park@gmail.com", active: false },
            { id: 3, name: "Kim", email: "kim@gmail.com", active: false },
        ],
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;
    const { name, email } = form;

    const onClick = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextIndex.current++,
                name,
                email,
                active: false,
            },
        });
        reset();
    }, [users, name, email]);

    const onToggle = useCallback(
        (userId) => {
            dispatch({
                type: "TOGGLE_USER",
                userId,
                form,
            });
        },
        [users]
    );

    const onDelete = useCallback(
        (userId) => {
            dispatch({
                type: "DELETE_USER",
                userId,
                form,
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
