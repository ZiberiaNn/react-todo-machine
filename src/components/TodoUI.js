import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoControls } from './TodoControls';


function TodoUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filteredResult,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoControls />
            <TodoList>
                {loading && <p>Loading</p>}
                {error && <p>error</p>}
                {(!loading && !filteredResult.length) && <p>Ingresa ToDo</p>}
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
        </>
    );
}

export { TodoUI };