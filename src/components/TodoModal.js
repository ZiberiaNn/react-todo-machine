import ReactDOM from "react-dom";
import React from "react";

function TodoModal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById("modal"));
}

export { TodoModal };
