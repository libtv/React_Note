import react from "react";

function CreateUser({ name, email, onChange, onClick }) {
    return (
        <div>
            <input type="text" value={name} onChange={onChange} name="name" />
            <input type="text" value={email} name="email" onChange={onChange} />
            <button onClick={onClick}>저장</button>
        </div>
    );
}

export default CreateUser;
