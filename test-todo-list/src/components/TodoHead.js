import styled, { css } from "styled-components";
import { MyValue } from "../ContextProvider";

const PaperHead = styled.div`
    /* layout size */
    width: 100%;
    height: fit-content;
    padding: 10px 30px 0 30px;

    /* layout position */

    /* layout background */
    background-color: white;
    border-bottom: 1px solid gray;
    box-shadow: 1px 1px 1px 1px gray;

    /* etc layout */
    h2,
    h3 {
        margin: 0;
    }

    h2 {
        margin: 25px 0 0 0;
        font-size: 40px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
    }
    h3 {
        margin: 15px 0 0 0;

        font-size: 20px;
        color: gray;
    }

    box-sizing: border-box;
    border-radius: 5px;
`;

const MyTextView = styled.h1`
    margin: 40px 0 30px 0;
    color: #20c997;
    font-size: 20px;
`;

function TodoHead({ children }) {
    const myValue = MyValue();
    const notDone = myValue.filter((todo) => {
        if (!todo.done) return todo;
    });
    return (
        <>
            <PaperHead>
                <h2>2021-10-21</h2>
                <h3>수요일</h3>
                <MyTextView>할일 {notDone.length}개 남음</MyTextView>
                {children}
            </PaperHead>
        </>
    );
}

export default TodoHead;
