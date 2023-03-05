import React from "react";
import './../styles/TodoControls.css';
import { TodoContext } from "../todoContext/TodoContext";
function TodoControls() {
    const {deleteAllTodos, setFilterValue } = React.useContext(TodoContext);
    const [selectedButton, setSelectedButton] = React.useState("all");

    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
      setFilterValue(buttonName)
    };
    return (
        <div className="TodoControls">
            <div className="filters">
                <span className={selectedButton === "all" ? "selected" : ""} onClick={()=>handleButtonClick("all")}>All</span>
                <span className={selectedButton === "pending" ? "selected" : ""} onClick={()=>handleButtonClick("pending")}>Pending</span>
                <span className={selectedButton === "completed" ? "selected" : ""} onClick={()=>handleButtonClick("completed")}>Completed</span>
                <button className="clear-btn" onClick={deleteAllTodos}>Clear</button>
            </div>
        </div>
    );
}

export { TodoControls };
