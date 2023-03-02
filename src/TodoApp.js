import "./TodoApp.css";
import React from "react";
import { TodoProvider } from "./components/TodoContext";
import { TodoUI } from "./components/TodoUI";


function TodoApp() {
  const hi ="hi";
  return (
    <div className="TodoApp">

      <TodoProvider value={hi}>
        <TodoUI />
      </TodoProvider>
    </div>
  );
}

export default TodoApp;
