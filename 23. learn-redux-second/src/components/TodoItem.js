function TodoItem({ value }) {
    return (
        <>
            <li>
                {value.id} : {value.text}
            </li>
        </>
    );
}
export default TodoItem;
