import "./TodoApp.css";
import React from "react";
import { useLocalStorage } from "./customHooks/useLocalStorage";

import { TodoUI } from "./components/TodoUI";


function TodoApp() {
  const {
    item: todoList,
    saveItem: saveTodoList,
    loading,
    error
  } = useLocalStorage("TODOLIST_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todoList.filter((todo) => !!todo.completed).length;
  const totalTodos = todoList.length;

  let filteredResult = [];

  if (searchValue.length < 1) {
    filteredResult = todoList;
  } else {
    filteredResult = todoList.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text === text);
    const newTodoList = [...todoList];
    newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed;
    saveTodoList(newTodoList);
  };

  const deleteTodo = (text) => {
    const newTodoList = todoList.filter((todo) => todo.text !== text);
    saveTodoList(newTodoList);
  };

  return (
    <div className="TodoApp">
      <TodoUI loading={loading}
        error={error}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredResult={filteredResult}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoApp;
