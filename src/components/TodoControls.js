import React from "react";
import './../styles/TodoControls.css';
import { CreateTodoButton } from './CreateTodoButton';


function TodoControls() {
    return (
        <div className="TodoControls">
            <div className="filters">
                <span className="active" id="all">All</span>
                <span id="pending">Pending</span>
                <span id="completed">Completed</span>
            </div>
            <div className="btn-container">
                <button className="clear-btn">Clear</button>
                <button 
                    className="clear-btn"
                    onClick={() => console.log("hi")}
                >
                    Add</button>
            </div>
        </div>
    );
}

export { TodoControls };
