import styled, { css } from "styled-components";
import { MdCancel, MdCheck } from "react-icons/md";
import TodoItem from "./TodoItem";
import { MyValue } from "../ContextProvider";

const PaperList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 450px;
    padding: 20px 10px;
    box-sizing: border-box;
    cursor: pointer;
`;

function TodoList({ children, ...rest }) {
    const myValue = MyValue();

    return (
        <>
            <PaperList>
                {myValue.map((todo) => {
                    return (
                        <TodoItem id={todo.id} done={todo.done}>
                            {todo.text}
                        </TodoItem>
                    );
                })}
            </PaperList>
        </>
    );
}

export default TodoList;
