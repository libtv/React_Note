import react, { useEffect, useContext } from "react";
import { UserDispatch } from "./App.js";

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => {
                return <UserInfo user={user} />;
            })}
        </div>
    );
}

function UserInfo({ user }) {
    const dispatch = useContext(UserDispatch);

    useEffect(() => {
        console.log("user 값이 설정됨");
        console.log(user);
        return () => {
            console.log("user 가 바뀌기 전..");
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            <h2>
                <b
                    style={{
                        backgroundColor: user.active ? "tomato" : "white",
                    }}
                    onClick={() => {
                        return dispatch({
                            type: "TOGGLE_USER",
                            userId: user.id,
                        });
                    }}
                >
                    {user.id}
                </b>{" "}
                {user.name} {user.email}{" "}
                <button
                    onClick={() => {
                        return dispatch({
                            type: "DELETE_USER",
                            userId: user.id,
                        });
                    }}
                >
                    삭제
                </button>
            </h2>
        </div>
    );
}

export default react.memo(UserList);
