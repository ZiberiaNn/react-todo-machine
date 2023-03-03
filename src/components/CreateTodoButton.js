import React from "react";
import "./../styles/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button className="clear-btn" onClick={() => console.log("hi")}>
      Add
    </button>
  );
}

export { CreateTodoButton };
