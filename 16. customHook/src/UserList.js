import react, { useEffect } from "react";

function UserList({ users, onToggle, onDelete }) {
    return (
        <div>
            {users.map((user) => {
                return <UserInfo user={user} onToggle={onToggle} onDelete={onDelete} />;
            })}
        </div>
    );
}

function UserInfo({ user, onToggle, onDelete }) {
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
                        return onToggle(user.id);
                    }}
                >
                    {user.id}
                </b>{" "}
                {user.name} {user.email}{" "}
                <button
                    onClick={() => {
                        return onDelete(user.id);
                    }}
                >
                    삭제
                </button>
            </h2>
        </div>
    );
}

export default react.memo(UserList);
