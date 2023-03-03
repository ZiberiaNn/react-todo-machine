import "./TodoApp.css";
import React from "react";
import { TodoProvider } from "./todoContext/TodoContext";
import { TodoUI } from "./components/TodoUI";


function TodoApp() {
  return (
    <div className="TodoApp">

      <TodoProvider>
        <TodoUI />
      </TodoProvider>
    </div>
  );
}

export default TodoApp;
