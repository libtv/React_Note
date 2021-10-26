import React from "react";
import styled from "styled-components";

function TodoItem({ children, id, text }) {
    return (
        <>
            <div>
                <h2>{id}</h2> : <h3>{text}</h3>
            </div>
        </>
    );
}

export default TodoItem;
