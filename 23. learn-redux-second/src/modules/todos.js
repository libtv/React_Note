//* action type */
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

//* craete action */
let nextId = 1;
export function addTodo(text) {
    return {
        type: ADD_TODO,
        todo: {
            id: nextId++,
            text,
        },
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    };
}

//* initState */
const initializeState = [];

//* craete reducer */
export default function todos(state = initializeState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, done: state.todo.done ? !state.todo.done : true };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}
