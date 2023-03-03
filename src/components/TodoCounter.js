import React from "react";
import "./../styles/TodoCounter.css";
import { TodoContext } from "../todoContext/TodoContext";
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <p className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </p>
  );
}

export { TodoCounter };
