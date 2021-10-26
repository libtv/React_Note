import { createStore } from "redux";

/* 초기 값 생성 */
const initializeState = {
    counter: 0,
    text: "",
    list: [],
};

/* 액션 타입 및 함수 정의  */
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

function increase() {
    return {
        type: INCREASE,
    };
}

function decrease() {
    return {
        type: DECREASE,
    };
}

function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text,
    };
}

function addToList(item) {
    return {
        type: ADD_TO_LIST,
        item,
    };
}

/* 리듀서 정의 */
function reducer(state = initializeState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter + -1,
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item),
            };
        default:
            return state;
    }
}

/* 스토어 생성 */
const store = createStore(reducer);

const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
