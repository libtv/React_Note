import React, { useContext, useReducer, useRef } from "react";

const NextIDContext = React.createContext();
const TodoStateValueContext = React.createContext();
const TodoSetStateValueConext = React.createContext();

const InitialVariable = [
    { id: 1, text: "리액트 기초 배우기", done: true },
    { id: 2, text: "리액트 중급 배우기", done: true },
    { id: 3, text: "리액트 고급 배우기", done: false },
    { id: 4, text: "리액트 프로젝트 하기", done: false },
];

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "REMOVE":
            return state.filter((todo) => {
                if (todo.id !== action.id) return todo;
            });
        case "TOGGLE":
            return state.map((todo) => {
                if (todo.id == action.id) return { ...todo, done: !todo.done };
                return todo;
            });
    }
}

function ContextProvider({ children, ...rest }) {
    const [value, setValue] = useReducer(todoReducer, InitialVariable);
    const nextId = useRef(5);

    return (
        <>
            <NextIDContext.Provider value={nextId}>
                <TodoStateValueContext.Provider value={value}>
                    <TodoSetStateValueConext.Provider value={setValue}>{children}</TodoSetStateValueConext.Provider>
                </TodoStateValueContext.Provider>
            </NextIDContext.Provider>
        </>
    );
}

export function MyNextId() {
    return useContext(NextIDContext);
}

export function MyValue() {
    return useContext(TodoStateValueContext);
}

export function MySetValue() {
    return useContext(TodoSetStateValueConext);
}

export default ContextProvider;
