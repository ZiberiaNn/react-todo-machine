import { TodoCounter } from "./components/TodoCounter";
import { TodoControls } from "./components/TodoControls";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import "./TodoApp.css";
import React from "react";

// const defaultTodoList = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Curso de intro a React", completed: false },
//   { text: "Llorar", completed: false },
//   { text: "Llorar2", completed: false },
// ];

function TodoApp() {
  const localStorageTodoList = localStorage.getItem("TODOLIST_V1");
  let parsedTodoList;

  if (!localStorageTodoList) {
    localStorage.setItem("TODOLIST_V1", JSON.stringify([]));
    parsedTodoList = [];
  } else {
    parsedTodoList = JSON.parse(localStorageTodoList);
  }

  const [searchValue, setSearchValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(parsedTodoList);
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

  const saveTodoList = (newTodoList) => {
    setTodoList(newTodoList);
    localStorage.setItem("TODOLIST_V1", JSON.stringify(newTodoList));
  }

  const completeTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text == text);
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
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoControls />
      <TodoList>
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
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}

export default TodoApp;
