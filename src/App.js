import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';



const todoList = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Curso de intro a React', completed: false},
  {text: 'Llorar', completed: false}
]

function App(props) {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todoList.map(( item ) => (
          <TodoItem key={item.text} text={item.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
