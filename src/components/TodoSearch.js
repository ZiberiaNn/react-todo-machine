import React from "react";
import "./../styles/TodoSearch.css";
import { TodoContext } from "../todoContext/TodoContext";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <div className="TodoSearch">
            <input
                placeholder="Task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export { TodoSearch }