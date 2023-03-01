import { TodoCounter } from "./components/TodoCounter";
import { TodoControls } from "./components/TodoControls";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import "./TodoApp.css";
import React from "react";

const defaultTodoList = [
  { text: "Cortar cebolla", completed: true },
  { text: "Curso de intro a React", completed: false },
  { text: "Llorar", completed: false },
  { text: "Llorar2", completed: false },
];

function TodoApp() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(defaultTodoList);
  const completedTodos = todoList.filter((todo) => !!todo.completed).length;
  const totalTodos = todoList.length;

  let filteredResult = [];

  if (searchValue.length < 1) {
    filteredResult = todoList;
  } else {
    filteredResult = todoList.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const completeTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text == text);
    const newTodoList = [...todoList];
    newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed;
    setTodoList(newTodoList);
  };

  const deleteTodo = (text) => {
    const newTodoList = todoList.filter((todo) => todo.text !== text);
    setTodoList(newTodoList);
  };

  return (
    <div className="TodoApp">
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoControls />
      <TodoList>
        {filteredResult.map(todo => (
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
