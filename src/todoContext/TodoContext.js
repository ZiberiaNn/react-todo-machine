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
    const [openModal, setOpenModal] = React.useState(false);
    const [filterValue, setFilterValue] = React.useState("all");

    const completedTodos = todoList.filter((todo) => !!todo.completed).length;
    const totalTodos = todoList.length;

    let filteredResult = [];

    const filterResult = () => {
        if (filterValue==="all") {
            if (searchValue.length < 1) {
                filteredResult = todoList;
            } else {
                filteredResult = todoList.filter((todo) => {
                    const todoText = todo.text.toLowerCase();
                    const searchText = searchValue.toLowerCase();
                    return todoText.includes(searchText);
                });
            }
        } else {
            let completed;
            if (filterValue === "completed") completed = true;
            else if(filterValue === "pending") completed = false;
            filteredResult = todoList.filter((todo) => {
                const todoText = todo.text.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText) && todo.completed===completed;
            });
        }
    }
    filterResult();

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


    const deleteAllTodos = () => {
        saveTodoList([]);
    };

    const addTodo = (text) => {
        const todo = {
            text: text,
            completed: false
        }
        const newTodoList = [...todoList,
            todo];
        saveTodoList(newTodoList);
    }
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
            openModal,
            setOpenModal,
            addTodo,
            deleteAllTodos,
            setFilterValue
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };