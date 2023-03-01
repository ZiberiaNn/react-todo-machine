import { TodoCounter } from './components/TodoCounter';
import { TodoControls } from './components/TodoControls';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import './TodoApp.css'


const todoList = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Curso de intro a React', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'Llorar', completed: false},


]

function TodoApp(props) {
  return (
    <div className='TodoApp'>
      <TodoSearch/>
      <TodoControls/>
      <TodoList>
        {todoList.map(( item ) => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <TodoCounter/>
    </div>
  );
}

export default TodoApp;
