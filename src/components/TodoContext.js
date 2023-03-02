import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredResult,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };