import React from "react";
import "./../styles/TodoAdder.css";
import { TodoContext } from "../todoContext/TodoContext";
import { TodoButton } from "./TodoButton";

function TodoAdder() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [inputValue, setInputValue] = React.useState("");

    const onInputValueChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className="TodoAdder">
            <div className="adder-input">
                <input
                    placeholder="Task name..."
                    onChange={onInputValueChange}
                />
            </div >
            <div className="button-div">
                <TodoButton text={"Add Task"} onClick={() => { addTodo(inputValue); setOpenModal(false) }}></TodoButton>
                <TodoButton text={"Close"} onClick={() => setOpenModal(false)}></TodoButton>
            </div>
        </div>

    );
}

export { TodoAdder }