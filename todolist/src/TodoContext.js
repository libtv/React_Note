import React, { useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: "프로젝트 생성하기",
        done: true,
    },
    {
        id: 2,
        text: "컴포넌트 스타일링하기",
        done: true,
    },
    {
        id: 3,
        text: "Context 만들기",
        done: false,
    },
    {
        id: 4,
        text: "기능 구현하기",
        done: false,
    },
];

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const TodoNextId = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, done: !todo.done };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

function TodoProvider({ children }) {
    const [state, action] = useReducer(reducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={action}>
                <TodoNextId.Provider value={nextId}>
                    <>{children}</>
                </TodoNextId.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoContext() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextId);
}

export default TodoProvider;
