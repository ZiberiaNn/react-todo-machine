import React from "react";
import './../styles/TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
  return <p className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</p>;
}

export { TodoCounter };
