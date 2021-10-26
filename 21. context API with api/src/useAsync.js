import { useEffect } from "react";
import { useUserDispatch, useUserState } from "./UserContextProvider";

function useAsync(callback) {
    const myDispatch = useUserDispatch();
    const myState = useUserState();

    const AsyncDispatch = async () => {
        myDispatch({
            type: "LOADING",
        });

        const response = await callback();

        myDispatch({
            type: "RENDER",
            data: response.data,
        });
    };

    useEffect(() => {
        AsyncDispatch();
    }, []);

    return [myState, AsyncDispatch];
}

export default useAsync;
