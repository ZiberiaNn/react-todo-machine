import React from "react";
import "./../styles/TodoItem.css";

function TodoItem(props) {
    const onComplete = () => {
        alert("Listo completo")
    }
    const onDelete = () => {
        alert("Listo borrado")
    }

    return (
        <li className="TodoItem">
            <span
                className={`check-icon ${props.completed && 'check-icon__completed'}`}
                onClick={onComplete}
            >
                ✓
            </span>
            <p className={`${props.completed && 'completed'}`}>{props.text}</p>
            <span
                className="delete-icon"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem }