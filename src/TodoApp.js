import { TodoCounter } from './components/TodoCounter';
import { TodoControls } from './components/TodoControls';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import './TodoApp.css'
import React from "react";

const defaultTodoList = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso de intro a React', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'Llorar2', completed: false},
]

function TodoApp() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(defaultTodoList);
  const completedTodos = todoList.filter(todo => !!todo.completed).length;
  const totalTodos = todoList.length;
  const filteredResult = defaultTodoList.filter(todo => todo.text.includes(searchValue));
  return (
    <div className='TodoApp'>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoControls/>
      <TodoList>
        {filteredResult.map(( item ) => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
    </div>
  );
}

export default TodoApp;
