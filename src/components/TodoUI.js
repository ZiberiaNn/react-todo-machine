import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoControls } from "./TodoControls";
import { TodoContext } from "../todoContext/TodoContext";
import { TodoModal } from "./TodoModal";
import { TodoButton } from "./TodoButton";
import { TodoAdder } from "./TodoAdder";

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
                {!loading && !filteredResult.length && <p>No Tasks found.</p>}
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
            <TodoButton text={"Add Task"} onClick={() => setOpenModal(true)} />
            {openModal && (
                <TodoModal>
                    <TodoAdder />
                </TodoModal>
            )}
        </>
    );
}

export { TodoUI };
