//* initialize Variable */
const initializeState = [];
let nextId = 0;

//* action type */
const ADD_LIST = "ADD_LIST";
const TOGGLE_LIST = "TOGGLE_LIST";

//* craete action *//
export function addList(text) {
    return {
        type: ADD_LIST,
        todo: {
            id: nextId++,
            text: text,
        },
    };
}

export function toggleList(id) {
    return {
        type: TOGGLE_LIST,
        id,
    };
}

//* create Reducer */
export default function todoReducer(state = initializeState, action) {
    switch (action.type) {
        case ADD_LIST:
            return state.concat(action.todo);
        case TOGGLE_LIST:
            return;
        default:
            return state;
    }
}
