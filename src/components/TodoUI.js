import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoControls } from "./TodoControls";
import { TodoContext } from "../todoContext/TodoContext";
import { TodoModal } from "./TodoModal";
import { CreateTodoButton } from "./CreateTodoButton";

function TodoUI() {
  const {
    error,
    loading,
    filteredResult,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoSearch />
      <TodoControls />
      <TodoList>
        {loading && <p>Loading</p>}
        {error && <p>error</p>}
        {!loading && !filteredResult.length && <p>Ingresa ToDo</p>}
        {filteredResult.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoCounter />
      {openModal && (
        <TodoModal>
          <p>AAA</p>
        </TodoModal>
      )}
    </>
  );
}

export { TodoUI };
