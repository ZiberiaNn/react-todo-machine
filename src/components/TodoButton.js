import React from "react";
import "./../styles/CreateTodoButton.css";

function TodoButton(props) {
  return (
    <div className="CreateTodoButton">
      <button
        className="add-btn"
        onClick={props.onClick}>
        {props.text}</button>
    </div>
  );
}

export { TodoButton };
