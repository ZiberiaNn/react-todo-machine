import React from "react";
import './../styles/TodoControls.css';
import { TodoContext } from "../todoContext/TodoContext";
function TodoControls() {

    const {deleteAllTodos} = React.useContext(TodoContext);
    return (
        <div className="TodoControls">
            <div className="filters">
                <span className="active" id="all">All</span>
                <span id="pending">Pending</span>
                <span id="completed">Completed</span>
                <button className="clear-btn" onClick={deleteAllTodos}>Clear</button>
            </div>
        </div>
    );
}

export { TodoControls };
