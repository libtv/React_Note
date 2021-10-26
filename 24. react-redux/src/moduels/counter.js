//* action type *//
const INCREASE = "conuter/INCREASE";
const DECREASE = "conuter/DECREASE";

//* create action */
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

//* initialize variable0 */
const initializeState = 0;

//* reducer */
export default function conuter(state = initializeState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}
