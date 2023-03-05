import ReactDOM from "react-dom";
import React from "react";
import "./../styles/TodoModal.css"

function TodoModal({ children }) {
  return ReactDOM.createPortal(<div className="TodoModal">
    {children}
  </div>, document.getElementById("modal"));
}

export { TodoModal };
