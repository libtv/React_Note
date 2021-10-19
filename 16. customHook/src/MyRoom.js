import React from "react";

function MyRoom({ room, on, OnToggle }) {
    console.log({ room, on });
    return (
        <div>
            <h2>
                {room} 현재 상태 : {on.toString()}
            </h2>
            <button onClick={() => OnToggle()}>{room} 버튼</button>
        </div>
    );
}

export default React.memo(MyRoom);
