import React from "react";
import "./../styles/TodoItem.css";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`check-icon ${props.completed && 'check-icon__completed'}`}
                onClick={props.onComplete}
            >
                ✓
            </span>
            <p className={`${props.completed && 'completed'}`}>{props.text}</p>
            <span
                className="delete-icon"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem }