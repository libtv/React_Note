import { useState, useCallback } from "react";

function useInput(initialForm) {
    const [inputs, setInputs] = useState(initialForm);
    const onChange = useCallback((e) => {
        var { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    });

    const reset = useCallback(() => {
        setInputs(initialForm);
    });

    return [inputs, onChange, reset];
}

export default useInput;
