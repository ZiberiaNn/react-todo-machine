import React from "react";
import './../styles/TodoControls.css';

function TodoControls() {


    return (
        <div className="TodoControls">
            <div className="filters">
                <span className="active" id="all">All</span>
                <span id="pending">Pending</span>
                <span id="completed">Completed</span>
                <button className="clear-btn">Clear</button>
            </div>
        </div>
    );
}

export { TodoControls };
