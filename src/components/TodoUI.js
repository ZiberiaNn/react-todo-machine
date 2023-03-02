import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoControls } from './TodoControls';
import { TodoContext } from './TodoContext';


function TodoUI() {
    return (
        <>
            <TodoSearch />
            <TodoControls />
            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    filteredResult,
                    completeTodo,
                    deleteTodo,
                }) => (
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
                )}
            </TodoContext.Consumer>
            <TodoCounter />
        </>
    );
}

export { TodoUI };