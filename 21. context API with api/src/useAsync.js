import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true,
            };

        case "RENDER":
            return {
                ...state,
                loading: false,
                data: action.data,
            };
    }
}

const initialState = {
    loading: true,
    data: null,
};

function useAsync(callback, deps) {
    const [variable, setVariable] = useReducer(reducer, initialState);

    const MyFunc = async () => {
        setVariable({
            type: "LOADING",
        });

        const response = await callback();

        setVariable({
            type: "RENDER",
            data: response.data,
        });
    };

    useEffect(() => {
        MyFunc();
    }, deps);

    return [variable, MyFunc];
}

export default useAsync;
