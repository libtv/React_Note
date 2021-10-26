//* action type with ducks pattern *//
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//* create action *//
export function setDiff(diff) {
    return {
        type: SET_DIFF,
        diff,
    };
}

export function increase() {
    return {
        type: INCREASE,
    };
}

export function decrease() {
    return {
        type: DECREASE,
    };
}

//* initialize variable *//
const initializeState = {
    number: 0,
    diff: 1,
};

//* reducer *//
export default function counter(state = initializeState, action) {
    switch (action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff,
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff,
            };

        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff,
            };

        default:
            return state;
    }
}
